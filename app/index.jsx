import icedCoffeeImg from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode="cover"
        style={styles.image}
      >
        {/* Overlay gelap supaya teks lebih jelas */}
        <View style={styles.overlay}>
          <Text style={styles.title}>Kedai kopi</Text>
          <Text style={styles.subtitle}>
            Hadir disetiap hari untuk kalian pecinta kopi
          </Text>

          {/* Kumpulan tombol navigasi */}
          <View style={styles.buttonGroup}>
            <Link href={"/menu"} asChild>
              <Pressable style={[styles.button, styles.primaryButton]}>
                <Text style={[styles.buttonText, styles.primaryButtonText]}>
                  Our menu
                </Text>
              </Pressable>
            </Link>


            {/* <Link href={"/specials"} asChild>
              <Pressable style={[styles.button, styles.secondaryButton]}>
                <Text style={styles.buttonText}>Spesial buat kamu</Text>
              </Pressable> */}
            {/* </Link> */}

            <Link href={"/about"} asChild>
              <Pressable style={[styles.button, styles.secondaryButton]}>
                <Text style={styles.buttonText}>Tentang kami</Text>
              </Pressable>
            </Link>

            <Link href={"/contact"} asChild>
              <Pressable style={[styles.button, styles.outlineButton]}>
                <Text style={[styles.buttonText, styles.outlineButtonText]}>
                  Kontak kami
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(40, 40, 40, 0.45)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: "rgba(76, 76, 76, 0.9)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    letterSpacing: 2,
  },

  subtitle: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },

  buttonGroup: {
    width: "100%",
    alignItems: "center",
    gap: 14, 
  },

  button: {
    height: 54,
    width: "75%",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  primaryButton: {
    backgroundColor: "rgba(255,255,255,0.95)",
  },

  primaryButtonText: {
    color: "#ffffffff",
  },

  secondaryButton: {
    backgroundColor: "rgba(0,0,0,0.75)",
  },

  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.85)",
  },

  outlineButtonText: {
    color: "rgba(255,255,255,0.9)",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
