import React from "react";
import { Box, HStack, Text, Pressable, VStack } from "@gluestack-ui/themed";
import { useRouter, Link } from "expo-router";

const Header = ({ title, subtitle, showBack = false }) => {
  const router = useRouter();

  return (
    <Box px="$4" py="$4" bg="$blue600" shadowColor="$black" shadowOpacity={0.2} shadowRadius={4}>
      <HStack justifyContent="space-between" alignItems="center">
        
        {/* Bagian kiri: Back button + Title */}
        <HStack alignItems="center" space="$3">

          {showBack && (
            <Pressable onPress={() => router.back()}>
              <Text fontSize="$2xl" fontWeight="700" color="$white" mt="$-1">
                ‹
              </Text>
            </Pressable>
          )}

          <Link href="/" asChild>
            <Pressable>
              <VStack>
                <Text fontSize="$lg" fontWeight="700" color="$white">
                  {title}
                </Text>

                {subtitle && (
                  <Text fontSize="$xs" color="$white" opacity={0.8}>
                    {subtitle}
                  </Text>
                )}
              </VStack>
            </Pressable>
          </Link>

        </HStack>

        {/* Bagian kanan: Profil */}
        <Link href="/profile" asChild>
          <Pressable>
            <Text color="$white" fontSize="$md" fontWeight="600">
              Profil
            </Text>
          </Pressable>
        </Link>

      </HStack>
    </Box>
  );
};

export default Header;
