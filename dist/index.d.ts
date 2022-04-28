/// <reference types="react" />
import * as react from 'react';
import { ReactNode, FunctionComponent } from 'react';

interface Button$1 {
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

declare const Column: FunctionComponent<Component>;

declare const Grid: FunctionComponent<Component>;

declare const Row: FunctionComponent<Component>;

declare const Layout: FunctionComponent<Component>;

declare const Page: FunctionComponent<Component>;

declare const Button: FunctionComponent<Button$1>;

declare const Video: FunctionComponent<Component>;

declare const _default$2: {
    Layout: react.FunctionComponent<Component>;
    Page: react.FunctionComponent<Component>;
};

declare const _default$1: {
    Button: react.FunctionComponent<Button$1>;
    Card: react.FunctionComponent<Component>;
    Video: react.FunctionComponent<Component>;
};

declare const _default: {
    Column: react.FunctionComponent<Component>;
    Row: react.FunctionComponent<Component>;
    Grid: react.FunctionComponent<Component>;
};

export { _default as Base, Button, Button as Card, Column, Grid, Layout, Page, Row, _default$2 as Utilities, Video, _default$1 as Widgets };
