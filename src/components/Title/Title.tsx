import { Text } from "native-base";
import { TitleProps } from "./interface";

export function Title({ children, ...rest }: TitleProps) {
    return (
        <Text
            fontSize="2xl"
            fontWeight="bold"
            color="gray.500"
            textAlign="center"
            mt={5}
            {...rest}
        >
            {children}
        </Text>
    )
}