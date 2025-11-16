import React, { useState } from "react";
import { Box, Text, Input, InputField, Button, VStack } from "@gluestack-ui/themed";
import Header from "../components/Header";

export default function Profile() {
  // Dummy data awal (profile user)
  const [profile, setProfile] = useState({
    name: "Pengguna BNN",
    email: "pengguna@example.com",
    phone: "081234567890",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setEditMode(false);
    alert("Profil berhasil diperbarui!");
  };

  return (
    <Box flex={1}>
      <Header title="Back" showBack />

      <Box p="$5">
        <VStack space="$5">

          {/* Nama */}
          <Box>
            <Text fontSize="$sm" mb="$1" fontWeight="600">
              Nama
            </Text>

            <Input variant="outline" isDisabled={!editMode}>
              <InputField
                value={profile.name}
                onChangeText={(value) => handleChange("name", value)}
              />
            </Input>
          </Box>

          {/* Email */}
          <Box>
            <Text fontSize="$sm" mb="$1" fontWeight="600">
              Email
            </Text>

            <Input variant="outline" isDisabled={!editMode}>
              <InputField
                value={profile.email}
                onChangeText={(value) => handleChange("email", value)}
              />
            </Input>
          </Box>

          {/* Nomor Telepon */}
          <Box>
            <Text fontSize="$sm" mb="$1" fontWeight="600">
              Nomor Telepon
            </Text>

            <Input variant="outline" isDisabled={!editMode}>
              <InputField
                value={profile.phone}
                onChangeText={(value) => handleChange("phone", value)}
              />
            </Input>
          </Box>

          {/* Tombol Aksi */}
          {!editMode ? (
            <Button mt="$4" onPress={() => setEditMode(true)}>
              <Text>Edit Profil</Text>
            </Button>
          ) : (
            <Button mt="$4" onPress={handleSave}>
              <Text>Simpan Perubahan</Text>
            </Button>
          )}
        </VStack>
      </Box>
    </Box>
  );
}
