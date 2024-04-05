import { ITextProps } from "native-base";
import { ReactNode } from "react";

export interface TitleProps extends ITextProps {
    children: ReactNode;
}
