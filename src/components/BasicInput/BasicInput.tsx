import { FormControl, Input } from "native-base";
import { InputProps } from "./interface";

export function BasicInput({ label, placeholder, ...rest }: InputProps) {
    return (
        <FormControl mt={3}>
            <FormControl.Label>{label}</FormControl.Label>
            <Input
                placeholder={placeholder}
                size="lg"
                w="100%"
                borderRadius="lg"
                backgroundColor="gray.100"
                shadow={3} />
        </FormControl>
    )
}
