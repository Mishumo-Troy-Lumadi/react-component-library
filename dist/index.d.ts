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
}

declare const _default$2: {
    Layout: react.FunctionComponent<Component>;
    Page: react.FunctionComponent<Component>;
};

declare namespace index_d$2 {
  export {
    _default$2 as default,
  };
}

declare const _default$1: {
    Button: react.FunctionComponent<Button>;
    Card: react.FunctionComponent<Component>;
};

declare namespace index_d$1 {
  export {
    _default$1 as default,
  };
}

declare const _default: {
    Column: react.FunctionComponent<Component>;
    Row: react.FunctionComponent<Component>;
    Grid: react.FunctionComponent<Component>;
};

declare namespace index_d {
  export {
    _default as default,
  };
}

export { index_d as Base, index_d$2 as Utilities, index_d$1 as Widgets };
