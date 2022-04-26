/// <reference types="react" />
import * as react from 'react';
import { ReactNode } from 'react';

interface ButtonProps {
    label?: string;
    icon?: ReactNode;
    className?: string;
    onClick?: VoidFunction;
}

declare const _default: {
    Button: react.FunctionComponent<ButtonProps>;
};

export { _default as Widgets };
