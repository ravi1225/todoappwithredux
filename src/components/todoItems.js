// import React, { useState } from "react";
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import Octicons from "react-native-vector-icons/Octicons";
// import { Colors } from "./Colors";

// export default function TodoItems(props) {
//   const [check, setCheck] = useState(props.todo.check);
//   return (
//     <View style={styles.flatlistView}>
//       <TouchableOpacity onPress={() => setCheck(!check)}>
//         <Icon
//           name={
//             check
//               ? "checkbox-marked-circle-outline"
//               : "checkbox-blank-circle-outline"
//           }
//           size={30}
//           color={Colors.CornflowerBlue}
//         />
//       </TouchableOpacity>

//       <View style={styles.touchView}>
//         <Text style={check ? styles.flatlistText1 : styles.flatlistText}>
//           {props.todo.text}
//         </Text>
//         <Octicons
//           name="primitive-dot"
//           size={30}
//           color={check ? Colors.green : Colors.red}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   flatlistView: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     paddingVertical: 20,
//     marginHorizontal: 15,
//     minHeight: 70,
//     borderBottomWidth: 0.5,
//     borderBottomColor: Colors.lightgray,
//   },

//   flatlistText: {
//     paddingRight: 10,
//     marginLeft: 10,
//     marginRight: 10,
//     marginBottom: 0.5,
//     fontSize: 25,
//     minWidth: 335,
//     borderBottomColor: Colors.lightgray,
//   },
//   flatlistText1: {
//     paddingRight: 10,
//     marginLeft: 10,
//     marginRight: 10,
//     marginBottom: 0.5,
//     fontSize: 25,
//     minWidth: 330,
//     borderBottomColor: Colors.lightgray,
//     textDecorationLine: "line-through",
//     opacity: 0.5,
//   },

//   touchView: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginHorizontal: 15,
//     marginBottom: 5,
//   },
// });
