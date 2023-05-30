import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { sectionedByDate } from "../../../db/dataBase";

const MakeShift = (data) => {
  const startTime = new Date(data.data.startTime)
    .toLocaleTimeString()
    .slice(0, 5);
  const endTime = new Date(data.data.endTime).toLocaleTimeString().slice(0, 5);
  console.log(startTime, endTime);
  return (
    <View style={styles.tab}>
      <View>
        <Text style={styles.text}>
          {startTime} - {endTime}
        </Text>
        <Text style={styles.text}>{data.data.area}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          sectionedByDate.map((item) => {
            item.data.map((shift) => {
              if (shift.id === data.data.id) {
                shift.booked = false;
              }
            });
          });
        }}
      >
        <Text style={styles.btnText}>Cancel</Text>
      </TouchableOpacity>
    </View>
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
  text: {
    fontSize: 20,
    color: "#333",
    paddingLeft: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "#E2006A",
    padding: 12,
    marginRight: 15,
    borderRadius: 50,
  },
  btnText: {
    color: "#E2006A",
    fontSize: 16,
  },
});

export default MakeShift;
