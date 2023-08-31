import { HStack, Image, Text } from "native-base";

interface Props {
  texto: string;
  linke: string;
  altImage: string;
}

export function CardBasic({ texto, link, altImage }) {
  return (
    <HStack height={20} width={"100%"} borderRadius={20}>
      <Image source={link} alt={altImage} size={30} />
      <Text>{texto}</Text>
    </HStack>
  );
}
