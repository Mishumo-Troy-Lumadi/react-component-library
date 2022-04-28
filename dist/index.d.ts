/// <reference types="react" />
import * as react from 'react';
import { ReactNode } from 'react';

interface Button {
    label?: string;
    icon?: ReactNode;
    className?: string;
    onClick?: VoidFunction;
}
interface Component {
    type?: string;
    className?: string;
    children?: ReactNode;
    onClick?: VoidFunction;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    url?: string;
}

declare const _default$2: {
    Layout: react.FunctionComponent<Component>;
    Page: react.FunctionComponent<Component>;
};

declare const _default$1: {
    Button: react.FunctionComponent<Button>;
    Card: react.FunctionComponent<Component>;
    Video: react.FunctionComponent<Component>;
};

declare const _default: {
    Column: react.FunctionComponent<Component>;
    Row: react.FunctionComponent<Component>;
    Grid: react.FunctionComponent<Component>;
};

export { _default as Base, _default$2 as Utilities, _default$1 as Widgets };
