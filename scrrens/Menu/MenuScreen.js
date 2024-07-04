import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { Card } from "react-native-paper";
import { COLORS } from "../../theme";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-virtualized-view";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Menu } from "../../data";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";

const MenuCard = ({ item, index, loading }) => {
  const marginBottom = index % 2 !== 0 ? 10 : 0;
  const marginRight = index % 2 !== 0 ? 10 : 0;
  return (
    <Animated.View
      entering={FadeInDown.duration(1000).delay(index * 100)}
      style={{
        width: "49%",
        backgroundColor: COLORS.white,
        marginRight: marginRight,
        marginBottom: marginBottom,
        borderRadius: 10,
      }}
    >
      <Card>
        {!loading && <Card.Cover source={{ uri: item.image }} />}
        {loading && <ActivityIndicator size="small" color={COLORS.black} />}
        <Card.Content>
          <Text
            numberOfLines={1}
            style={{ fontSize: hp(2), fontWeight: "bold", marginTop: 10 }}
          >
            {item.name}
          </Text>
        </Card.Content>
      </Card>
    </Animated.View>
  );
};

const Loading = () => {
  console.log("Loading");
  return (
    <View style={{ marginTop: 20 }}>
      <ActivityIndicator size="small" color={COLORS.black} />
    </View>
  );
};

const MenuScreen = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    setTimeout(() => {
      setMenu(Menu);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView>
      <Header />
      {loading && <Loading />}
      {!loading && (
        <LinearGradient colors={[COLORS.primary, COLORS.secondary]}>
          <ScrollView
            style={{ padding: 10, marginBottom: useBottomTabBarHeight() }}
          >
            <FlatList
              data={menu}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <MenuCard loading={loading} item={item} />
              )}
              numColumns={2}
            />
          </ScrollView>
        </LinearGradient>
      )}
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
