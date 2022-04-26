import { ReactNode } from "react";
interface ButtonProps {
    label?: string;
    icon?: ReactNode;
    className?: string;
    onClick?: VoidFunction;
}
export { ButtonProps };
