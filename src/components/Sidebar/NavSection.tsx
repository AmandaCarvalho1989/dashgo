import { Box, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}
const NavSection: React.FC<NavSectionProps> = ({ title, children }) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="smaill">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};

export default NavSection;
