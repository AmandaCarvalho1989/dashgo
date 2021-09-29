import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ReactNode } from "react";
import { createContext } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext<SidebarDrawerContextData>(
  {} as SidebarDrawerContextData
);

export const SidebarDrawerProvider: React.FC<SidebarDrawerProviderProps> = ({
  children,
}) => {
  const disclouse = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    disclouse.onClose();
  }, [router.asPath]);
  return (
    <SidebarDrawerContext.Provider value={disclouse}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
