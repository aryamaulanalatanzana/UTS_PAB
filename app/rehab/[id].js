import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Box, Text, Image } from "@gluestack-ui/themed";
import Header from "../../components/Header";
import rehabData from "../../datas/rehabData";

export default function RehabDetail() {
  const { id } = useLocalSearchParams();
  const rehab = rehabData.find((r) => r.id === id);

  return (
    <Box flex={1}>
      <Header title={rehab.name} showBack />
      <ScrollView>
        <Box p="$4">
          <Image source={{ uri: rehab.image }} w="$full" h="$60" alt="foto rehab" />

          <Text mt="$4" fontSize="$md" fontWeight="700">Alamat :</Text>
          <Text>{rehab.address}</Text>

          <Text mt="$4" fontSize="$md" fontWeight="700">Telepon :</Text>
          <Text>{rehab.phone}</Text>

          <Text mt="$4" fontSize="$md" fontWeight="700">Layanan :</Text>
          <Text>{rehab.services}</Text>
        </Box>
      </ScrollView>
    </Box>
  );
}
