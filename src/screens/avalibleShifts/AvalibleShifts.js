import { StyleSheet, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { sectionedByPlace } from "../../db/dataBase";
import MakeScreen from "./components/MakeScreen";
import { tabBarOptions } from "./components/tabBarOptions";

const Tab = createMaterialTopTabNavigator();

const AvalibleShifts = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        {sectionedByPlace.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={`${item.title} (${item.data.length})`}
              style={styles.tab}
              component={() => {
                return <MakeScreen item={item.data} />;
              }}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default AvalibleShifts;
