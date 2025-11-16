import React, { useState } from "react";
import { ScrollView, Box, Button, Text, Image } from "@gluestack-ui/themed";
import Header from "../components/Header";
import NewsItem from "../components/NewsItem";
import datas from "../datas";
import { Link } from "expo-router";

export default function Home() {
  const [favorites, setFavorites] = useState([]);

  const toggleFav = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <Box flex={1}>
      <Header title="BNN Info" />

      <ScrollView>

        {/* Banner BNN */}
        <Box>
          <Image
            source={{
              uri: "https://placehold.co/900x300?text=BNN+Indonesia",
            }}
            w="$full"
            h="$40"
            alt="Banner BNN"
          />
        </Box>

        {/* Tentang BNN */}
        <Box p="$4">
          <Text fontWeight="700" fontSize="$lg" mb="$2">
            Badan Narkotika Nasional (BNN)
          </Text>

          <Text fontSize="$sm">
            BNN bertugas melakukan pencegahan, pemberantasan, penyalahgunaan,
            dan peredaran gelap narkotika di Indonesia. Aplikasi ini menyediakan
            informasi berita, layanan rehabilitasi, dan profil pengguna.
          </Text>

          {/* Tombol Navigasi */}
          <Box mt="$4">
            <Link href="/rehab" asChild>
              <Button mb="$3">
                <Text>Layanan Rehabilitasi</Text>
              </Button>
            </Link>

            <Link href="/profile" asChild>
              <Button>
                <Text>Pengaturan Profil</Text>
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Daftar Berita */}
        <Box p="$4">
          <Text fontWeight="700" fontSize="$lg" mb="$2">
            Berita Terbaru
          </Text>
        </Box>

        {datas.map((item) => (
          <Box key={item.id}>
            <NewsItem item={item} isFav={favorites.includes(item.id)} />

            <Box
              flexDirection="row"
              justifyContent="flex-end"
              pr="$4"
              pb="$3"
            >
              <Button onPress={() => toggleFav(item.id)}>
                <Text>
                  {favorites.includes(item.id)
                    ? "Unfavorite"
                    : "Favorite"}
                </Text>
              </Button>
            </Box>
          </Box>
        ))}

      </ScrollView>
    </Box>
  );
}
