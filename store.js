import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  products: [],
  addToCart: (product) => {
    const itemPresent = get().products.find((item) => item.id === product.id);
    if (itemPresent) {
      set((state) => ({
        products: state.products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }));
    } else {
      set((state) => ({
        products: [...state.products, { ...product, quantity: 1 }],
      }));
    }
  },
  removeFromCart: (productId) => {
    const itemPresent = get().products.find((item) => item.id === productId);
    if (itemPresent.quantity > 1) {
      set((state) => ({
        products: state.products.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      }));
    } else {
      set((state) => ({
        products: state.products.filter((item) => item.id !== productId),
      }));
    }
  },
  deleteFromCart: (productId) => {
    set((state) => ({
      products: state.products.filter((item) => item.id !== productId),
    }));
  },
  cartLength: () => {
    return get().products.length;
  },
  productPresentCart: (productId) => {
    return get().products.find((item) => item.id === productId);
  },
  clearCart: () => {
    set({ products: [] });
  },
  cartTotal: () => {
    return get().products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  },
}));

export const useAddressStore = create((set, get) => ({
  address: [
    {
      id: 1,
      name: "Saikumar",
      code: "91",
      phoneNumber: "9876543210",
      address: "Flat 101, Building 101, 101 Main Street, Indiranagar",
      state: "Karnataka",
      country: "India",
      pinCode: "560032",
      default: true
    },
  ],
  addAddress: (address) => {
    set({ address: [...get().address, {...address, default: false}] });
  },
  deleteAddress: (addressId) => {
    set({ address: get().address.filter((item) => item.id !== addressId) });
  },
  setDefaultAddress: (addressId) => set((state) => (state.address.map((address) => address.id === addressId ? {...address, default: true} : {...address, default: false}))),
  getDefaultAddress: () => get().address.find((address) => address.default),
  resetAddress: (addressId) => set({ address: get().addAddress.filter((address) => address.id !== addressId) }),
}));
