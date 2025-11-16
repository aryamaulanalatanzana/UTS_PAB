import React from "react";
import { Box, Text, Image } from "@gluestack-ui/themed";
import { Link } from "expo-router";

export default function RehabItem({ item }) {
  return (
    <Link href={`/rehab/${item.id}`} asChild>
      <Box p="$4" borderBottomColor="$coolGray300" borderBottomWidth={1} flexDirection="row">
        <Box w="$28" h="$20" mr="$3">
          <Image source={{ uri: item.image }} w="$full" h="$full" alt="Rehab" />
        </Box>
        <Box flex={1}>
          <Text fontSize="$md" fontWeight="700">{item.name}</Text>
          <Text fontSize="$sm" mt="$1">{item.address}</Text>
        </Box>
      </Box>
    </Link>
  );
}
