import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState, useCallback } from "react";
import { sectionedByDate } from "../../db/dataBase";
import { useFocusEffect } from "@react-navigation/native";
import MakeShift from "./components/MakeShift";

const MyShifts = () => {
    const [shifts, setShifts] = useState([])
    useFocusEffect(
        useCallback(() => {
            setShifts(sectionedByDate);
        }, [])
    );

    
  return (
    <View>
      <SectionList
        style={styles.container}
        sections={shifts}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <MakeShift data={item} setState={setShifts} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "#F1F4F8",
    color: "#4F6C92",
    padding: 10,
    paddingLeft: 20,
    borderTopWidth: 1,
    borderTopColor: "#4F6C92",
    borderBottomWidth: 1,
    borderBottomColor: "#4F6C92",
  },
  container: {
    marginTop: 50,
  },
});

export default MyShifts;
