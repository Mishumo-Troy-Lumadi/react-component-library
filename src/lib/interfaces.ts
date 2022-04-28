import { ReactNode } from "react";

interface Button {
    label?: string;
    icon?: ReactNode;
    className?: string;
    onClick?: VoidFunction;
}

interface Component {
    type?: string
    className?: string
    children?: ReactNode
    onClick?: VoidFunction
    controls?: boolean
    loop?: boolean
    muted?: boolean
    url?: string
}


export { Button, Component }