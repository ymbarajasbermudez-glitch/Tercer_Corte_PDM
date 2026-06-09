import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export default function EmojiPicker({ isVisible, onClose, children }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>✕</Text>
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#464C55",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  closeButton: {
    color: "#fff",
    fontSize: 18,
  },
});
