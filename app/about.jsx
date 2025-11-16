// app/about.jsx
import { Colors } from "@/constants/Colors";
import {Appearance,SafeAreaView,ScrollView,StyleSheet,Text,View,} from "react-native";

export default function AboutScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>About Coffee Shop</Text>
        <Text style={styles.subtitle}>
          Freshly brewed happiness in every cup.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Our Story</Text>
          <Text style={styles.text}>
            Coffee Shop dimulai dari kecintaan kami pada kopi yang diseduh
            dengan penuh perhatian. Kami percaya setiap cangkir punya cerita,
            dan kami ingin membagikannya lewat suasana yang hangat dan nyaman.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>What We Serve</Text>
          <Text style={styles.text}>
            Dari espresso klasik, latte creamy, sampai iced coffee yang segar,
            semua dibuat dari biji kopi pilihan yang disangrai dengan kualitas
            tinggi. Kami juga menyediakan cemilan manis dan gurih untuk
            menemani waktu santai kamu.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Our Values</Text>
          <Text style={styles.text}>• Bahan berkualitas setiap hari{"\n"}</Text>
          <Text style={styles.text}>• Pelayanan ramah dan bersahabat{"\n"}</Text>
          <Text style={styles.text}>
            • Tempat yang nyaman untuk bekerja, belajar, atau sekadar santai
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Visit Us</Text>
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
    title: {
      color: theme.text,
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 4,
    },
    subtitle: {
      color: theme.text,
      fontSize: 14,
      opacity: 0.8,
      marginBottom: 16,
    },
    section: {
      marginBottom: 16,
      padding: 12,
      borderRadius: 12,
      backgroundColor:
        colorScheme === "dark" ? "#2b2b2b" : "rgba(0,0,0,0.03)",
    },
    sectionHeading: {
      color: theme.text,
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 6,
    },
    text: {
      color: theme.text,
      fontSize: 14,
      lineHeight: 20,
    },
  });
}
