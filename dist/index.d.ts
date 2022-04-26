/// <reference types="react" />
import * as react from 'react';
import { ReactNode } from 'react';

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

declare const _default: {
    Button: react.FunctionComponent<Button>;
    Card: react.FunctionComponent<Card>;
};

export { _default as Widgets };
