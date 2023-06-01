import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { sectionedByDate, changeStatus } from "../../../db/dataBase";


const MakeShift = ({ data }) => {
    const startTime = new Date(data.startTime).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour24: true,
    });
    const endTime = new Date(data.endTime).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour24: true,
    });
    return (
        <View style={styles.tab}>
        <View>
            <Text style={styles.text}>
            {startTime} - {endTime}
            </Text>
        </View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
            changeStatus(data.id, true);
            }}
        >
            <Text style={styles.btnText}>Book</Text>
        </TouchableOpacity>
        </View>
    );
    }

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
        borderColor: "#004FB4",
        padding: 12,
        marginRight: 15,
        borderRadius: 50,
    },
    btnText: {
        color: "#004FB4",
        fontSize: 16,
    },
});

export default MakeShift;