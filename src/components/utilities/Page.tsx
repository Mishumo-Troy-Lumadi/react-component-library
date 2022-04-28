import React, { FunctionComponent } from 'react';
import { Component as Props } from '../../lib/interfaces';
import Layout from './Layout';

const Page: FunctionComponent<Props> = ({
	className,
	children
}) => {

    return (
        <Layout className={`flex-auto ${className}`}>
            {children}
        </Layout>
    )

};

export default Page;
