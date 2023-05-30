import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { sectionedByDate } from "../../db/dataBase";
import MakeShift from "./components/MakeShift";

const MyShifts = () => {
  return (
    <View>
      <SectionList
        style={styles.container}
        sections={sectionedByDate}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          if (item.booked) {
            return <MakeShift data={item} />;
          }
        }}
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
