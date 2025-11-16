import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Appearance, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function ContactScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);

  const iconColor = colorScheme === "dark" ? "#e5e7eb" : "#4b5563";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Text style={styles.title}>Coffee Shop</Text>

          {/* Address */}
          <View style={styles.sectionRow}>
            <Ionicons name="location-outline" size={20} color={iconColor} style={styles.icon} />
            <View style={styles.sectionContent}>
              <Text style={styles.sectionLabel}>Alamat</Text>
              <Text style={styles.text}>
                Jl. sawunggaling 2 no 150A Jemundo, taman sidoarjo, jawa timur{"\n"}
                
              </Text>
            </View>
          </View>

          {/* Phone */}
          <View style={styles.sectionRow}>
            <Ionicons name="call-outline" size={20} color={iconColor} style={styles.icon} />
            <View style={styles.sectionContent}>
              <Text style={styles.sectionLabel}>Telepon</Text>
              <Text style={styles.text}>
                <Link href="tel:5555555555" style={styles.link}>
                  0857-3295-2003
                </Link>
                {"\n"}
                {/* <Text>or </Text> */}
                <Link href="sms:5555555555" style={styles.link}>
      
                </Link>
              </Text>
            </View>
          </View>

          {/* Hours */}
          <View style={styles.sectionRow}>
            <Ionicons name="time-outline" size={20} color={iconColor} style={styles.icon} />
            <View style={styles.sectionContent}>
              <Text style={styles.sectionLabel}>Buka jam</Text>
              <Text style={styles.text}>Buka pada jam 08.00</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function createStyles(theme, colorScheme) {
  const isDark = colorScheme === "dark";

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    wrapper: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 24,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    card: {
      width: "100%",
      maxWidth: 420,
      backgroundColor: isDark ? "#18181b" : "#ffffff",
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 18,
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 18,
      shadowOffset: { width: 0, height: 8 },
      elevation: 3,
    },
    title: {
      color: theme.text,
      fontSize: 24,
      fontWeight: "700",
      marginBottom: 16,
    },

    sectionRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 16,
    },
    icon: {
      marginRight: 10,
      marginTop: 2,
    },
    sectionContent: {
      flex: 1,
    },

    sectionLabel: {
      fontSize: 13,
      fontWeight: "500",
      letterSpacing: 0.4,
      textTransform: "uppercase",
      color: isDark ? "#a1a1aa" : "#6b7280",
      marginBottom: 4,
    },
    text: {
      color: theme.text,
      fontSize: 15,
      lineHeight: 22,
    },
    link: {
      textDecorationLine: "underline",
      color: isDark ? "#93c5fd" : "#2563eb",
      fontWeight: "500",
    },
  });
}
