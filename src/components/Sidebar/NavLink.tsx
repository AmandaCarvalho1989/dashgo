import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import React, { ElementType } from "react";
import Link from "next/link";
import ActiveLink from "../ActiveLink";
interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}
const NavLink: React.FC<NavLinkProps> = ({ icon, children, href, ...rest }) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};

export default NavLink;
