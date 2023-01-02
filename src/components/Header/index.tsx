import React from "react";
import primaryLogo from "../../assets/icon-dashboard.svg";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { Button, Flex, Heading, Image, useDisclosure } from "@chakra-ui/react";
import { DrawerMenu } from "../Menu/DrawerMenu";

export const Header: React.FC = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Flex
      borderBottom={"1px solid #f5f5f5"}
      p={"2px 60px"}
      alignItems={"center"}
      justifyContent={"space-around"}
      w={"100%"}
      height={"85px"}
    >
      <Flex w={"100%"} alignItems={"center"}>
        <Image src={primaryLogo} />
        <Heading
          as={"h1"}
          ml={"10px"}
          size={"lg"}
          lineHeight={"30px"}
          fontWeight={"700"}
        >
          {" "}
          Dashboard{" "}
        </Heading>
      </Flex>
      <Button onClick={onToggle}>
        {isOpen ? <RiMenuUnfoldLine size={32} /> : <RiMenuFoldLine size={32} />}
      </Button>
      <DrawerMenu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
