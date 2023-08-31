import React from "react";
import { HStack, Text, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { CardCat } from "./components/card_cat";

export function HomeScreen() {
  return (
    <VStack
      bg={"#121212"}
      height={"100%"}
      alignContent={"center"}
      paddingTop={RFPercentage(10)}
      paddingX={RFPercentage(2)}
    >
      <HStack justifyContent={"space-between"}>
        <Text fontFamily={"Gotham"} color={"#FFFFFF"} fontSize={RFValue(24)}>
          Boa noite
        </Text>
        <HStack paddingTop={RFValue(1)} justifyContent={"flex-end"}>
          <Feather name={"bell"} size={26} color={"#FFFFFF"} />
          <HStack paddingX={RFValue(5)}>
            <Feather name={"clock"} size={26} color={"#FFFFFF"} />
          </HStack>
          <Feather name={"settings"} size={26} color={"#FFFFFF"} />
        </HStack>
      </HStack>

      <HStack>
        <CardCat texto={"Música"} />
      </HStack>

      <VStack>
        <HStack></HStack>
      </VStack>
    </VStack>
  );
}
