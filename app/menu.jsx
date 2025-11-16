import { Colors } from "@/constants/Colors";
import {Appearance,FlatList, Image,Platform,SafeAreaView,ScrollView,StyleSheet,Text,View,} from "react-native";

import MENU_IMAGES from "@/constants/MenuImages";
import { MENU_ITEMS } from "@/constants/MenuItems";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const seperatorComponent = <View style={styles.separator} />;
  // const headerComponent = <Text>Top Of List</Text>;
  const footerComponent = (
    <Text style={{ color: theme.text }}>End Of Menus</Text>
  );

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={seperatorComponent}
        // ListHeaderComponent={headerComponent}
        ListFooterComponent={footerComponent}
        ListFooterComponentStyle={styles.footerComponent}
        ListEmptyComponent={<Text>No Items</Text>}
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.menuTextRow}>
              <Text style={[styles.menuItemTitle, styles.menuItemText]}>
                {item.title}
              </Text>
              <Text style={styles.menuItemText}>{item.description}</Text>
            </View>
            <Image style={styles.menuImage} source={MENU_IMAGES[item.id - 1]} />
          </View>
        )}
      />
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  const isDark = colorScheme === "dark";

  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 16,
      backgroundColor: theme.background,
      alignItems: "center",
    },

    // separator jadi jarak saja, bukan garis
    separator: {
      height: 14,
    },

    footerComponent: {
      marginHorizontal: "auto",
      marginTop: 8,
    },

    row: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      maxWidth: 400,
      padding: 12,
      marginBottom: 4,
      marginHorizontal: "auto",

      // ROUND SHAPE tanpa outline
      borderRadius: 24,
      backgroundColor: isDark
        ? "rgba(255,255,255,0.06)"   // transparan di dark mode
        : "rgba(255,255,255,0.9)",   // putih agak transparan di light mode

      // HILANGKAN BORDER
      borderWidth: 0,
      borderColor: "transparent",

      // BAYANGAN HALUS
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      elevation: 4, // penting untuk Android
    },

    menuTextRow: {
      flex: 1,
      marginRight: 12,
    },

    menuItemTitle: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 4,
    },

    menuItemText: {
      color: theme.text,
    },

    menuImage: {
      width: 90,
      height: 90,
      borderRadius: 20, // supaya gambar ikut rounded
    },
  });
}