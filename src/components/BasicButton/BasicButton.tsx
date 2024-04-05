import { Button } from "native-base";
import { ButtonProps } from "./interface";

export function BasicButton({ children, ...rest }: ButtonProps) {
    return (
        <Button
            width="100%"
            bg="blue.800"
            mt={10}
            borderRadius="lg"
            {...rest}>
            {children}
        </Button>

    )
}
