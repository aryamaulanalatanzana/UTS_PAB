import React from "react";
import { ScrollView, Box, Text } from "@gluestack-ui/themed";
import Header from "../../components/Header";
import rehabData from "../../datas/rehabData";
import RehabItem from "../../components/RehabItem";

export default function RehabList() {
  return (
    <Box flex={1}>
      <Header title=" Back " showBack />
      <ScrollView>
        {rehabData.map((item) => (
          <RehabItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </Box>
  );
}
