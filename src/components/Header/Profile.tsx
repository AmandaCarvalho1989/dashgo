import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}
const Profile: React.FC<ProfileProps> = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right" display="">
          <Text>Amanda Carvalho</Text>
          <Text color="gray.300" fontSize="small">
            amanda.carvalho@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Amada Carvalho"
        src="https://github.com/amandacarvalho1989.png"
      />
    </Flex>
  );
};

export default Profile;
