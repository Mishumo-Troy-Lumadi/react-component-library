/// <reference types="react" />
import * as react from 'react';
import { ReactNode, ReactElement } from 'react';

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

declare const _default: {
    Button: react.FunctionComponent<Button>;
    Card: react.FunctionComponent<Card>;
};

export { _default as Widgets };
