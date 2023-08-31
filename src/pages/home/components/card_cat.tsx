import { HStack, Text } from "native-base";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  text: string;
}

export function CardCat({ texto }) {
  return (
    <HStack
      borderRadius={10}
      bg={"#434343"}
      height={RFValue(10)}
      width={"auto"}
    >
      <Text>{texto}</Text>
    </HStack>
  );
}
