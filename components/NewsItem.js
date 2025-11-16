import React from "react";
import { Box, Image, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";

const NewsItem = ({ item, isFav }) => {
  return (
    <Link href={{ pathname: "/article", params: { id: item.id } }} asChild>
      <Box
        p="$4"
        borderBottomWidth={1}
        borderBottomColor="$coolGray300"
        flexDirection="row"
      >
        <Box w="$28" h="$20" mr="$3">
          <Image source={{ uri: item.image }} w="$full" h="$full" alt="thumb" />

        </Box>
        <Box flex={1}>
          <Text fontSize="$sm">{item.date}</Text>
          <Text fontSize="$md" fontWeight="700">
            {item.title}
            {isFav ? " ⭐" : ""}
          </Text>
          <Text fontSize="$sm" mt="$2">
            {item.excerpt}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default NewsItem;
