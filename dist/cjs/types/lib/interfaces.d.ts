import { ReactNode } from "react";
interface Button {
    label?: string;
    icon?: ReactNode;
    className?: string;
    onClick?: VoidFunction;
}
interface Card {
    className?: string;
    children?: ReactNode;
    onClick?: VoidFunction;
}
export { Button, Card };
