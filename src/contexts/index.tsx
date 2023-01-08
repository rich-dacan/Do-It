import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { TaskProvider } from "./TaskContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <TaskProvider>
        <ChakraProvider theme={theme}> {children}</ChakraProvider>
      </TaskProvider>
    </AuthProvider>
  );
};
