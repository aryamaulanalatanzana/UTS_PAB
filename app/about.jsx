// app/about.jsx
import { Colors } from "@/constants/Colors";
import {
  Appearance,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

export default function AboutScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Header Title + Icon */}
        <View style={styles.headerRow}>
          <View style={styles.logoCircle}>
            <Ionicons
              name="cafe-outline"
              size={26}
              color={theme.text}
            />
          </View>
          <View>
            <Text style={styles.title}>About Coffee Shop</Text>
            <Text style={styles.subtitle}>
              daily coffee for those of you who are feeling stuffy
            </Text>
          </View>
        </View>

        {/* Our Story */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderRow}>
            <Ionicons
              name="book-outline"
              size={18}
              color={theme.text}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionHeading}>Our Story</Text>
          </View>
          <Text style={styles.text}>
            Coffee Shop dimulai dari kecintaan kami pada kopi yang diseduh
            dengan penuh perhatian. Kami percaya setiap cangkir punya cerita,
            dan kami ingin membagikannya lewat suasana yang hangat dan nyaman.
          </Text>
        </View>

        {/* What We Serve */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderRow}>
            <MaterialCommunityIcons
              name="coffee-outline"
              size={18}
              color={theme.text}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionHeading}>What We Serve</Text>
          </View>
          <Text style={styles.text}>
            Dari espresso klasik, latte creamy, sampai iced coffee yang segar,
            semua dibuat dari biji kopi pilihan yang disangrai dengan kualitas
            tinggi. Kami juga menyediakan cemilan manis dan gurih untuk
            menemani waktu santai kamu.
          </Text>
        </View>

        {/* Our Values */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderRow}>
            <Feather
              name="heart"
              size={18}
              color={theme.text}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionHeading}>Our Values</Text>
          </View>
          <Text style={styles.text}>• Bahan berkualitas setiap hari{"\n"}</Text>
          <Text style={styles.text}>
            • Pelayanan ramah dan bersahabat{"\n"}
          </Text>
          <Text style={styles.text}>
            • Tempat yang nyaman untuk santai
          </Text>
        </View>

        {/* Visit Us */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderRow}>
            <Ionicons
              name="location-outline"
              size={18}
              color={theme.text}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionHeading}>Visit Us</Text>
          </View>
          <Text style={styles.text}>
            Datang dan rasakan sendiri suasana Coffee Shop. Kami siap
            menyajikan secangkir kopi terbaik untuk menemani harimu.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    contentContainer: {
      padding: 16,
      paddingBottom: 24,
    },

    // Header
    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    logoCircle: {
      width: 44,
      height: 44,
      borderRadius: 22,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 12,
      backgroundColor:
        colorScheme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
    },
    title: {
      color: theme.text,
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 2,
    },
    subtitle: {
      color: theme.text,
      fontSize: 13,
      opacity: 0.7,
    },

    // Section
    section: {
      marginBottom: 16,
      padding: 14,
      borderRadius: 14,
      backgroundColor:
        colorScheme === "dark" ? "#1f1f1f" : "rgba(0,0,0,0.03)",
      borderWidth: 1,
      borderColor:
        colorScheme === "dark" ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
    },
    sectionHeaderRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 6,
    },
    sectionIcon: {
      marginRight: 6,
      opacity: 0.9,
    },
    sectionHeading: {
      color: theme.text,
      fontSize: 17,
      fontWeight: "600",
    },
    text: {
      color: theme.text,
      fontSize: 14,
      lineHeight: 20,
      opacity: 0.9,
    },
  });
}
