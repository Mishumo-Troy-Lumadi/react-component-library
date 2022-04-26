import { ReactElement, ReactNode } from "react";
interface Button {
    label?: string;
    icon?: ReactNode;
    className?: string;
    onClick?: VoidFunction;
}
interface Card {
    className?: string;
    children?: ReactElement;
    onClick?: VoidFunction;
}
export { Button, Card };
