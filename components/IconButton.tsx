import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  icon: any;
  label: string;
  onPress?: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <View style={styles.iconButtonContent}>
        <MaterialIcons name={icon} size={24} color="#fff" />
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },

  iconButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconButtonLabel: {
    color: "#fff",
    marginLeft: 12,
  },
});
