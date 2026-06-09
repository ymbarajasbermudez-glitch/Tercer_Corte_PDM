import { FlatList, Image, Pressable, StyleSheet } from "react-native";

type Props = {
  onSelect: (image: any) => void;
  onCloseModal: () => void;
};

const emojiList = [
  require("../assets/images/emoji1.png"),
  require("../assets/images/emoji2.png"),
  require("../assets/images/emoji3.png"),
  require("../assets/images/emoji4.png"),
  require("../assets/images/emoji5.png"),
  require("../assets/images/emoji6.png"),
];

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={emojiList}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} resizeMode="contain" style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
