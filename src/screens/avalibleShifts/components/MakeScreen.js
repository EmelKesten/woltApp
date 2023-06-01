import { Text, StyleSheet, SectionList } from "react-native";
import MakeShift from "./MakeShift";

const MakeScreen = ({ item }) => {
  return (
    <SectionList
      style={styles.container}
      sections={item}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <MakeShift data={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
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
});

export default MakeScreen;
