import React, { FunctionComponent } from 'react';
import { Component as Props } from '../../lib/interfaces';
import Column from './../base/Column';
import Grid from '../base/Grid';
import Row from '../base/Row';

const Layout: FunctionComponent<Props> = ({
	type = 'column',
	className,
	children,
	onClick,
}) => {
	if (type.toLocaleLowerCase() == 'column') {
		return <Column {...{ className, onClick }}>{children}</Column>;
	} else if (type.toLocaleLowerCase() == 'row') {
		return <Row {...{ className, onClick }}>{children}</Row>;
	} else if (type.toLocaleLowerCase() == 'grid') {
		return <Grid {...{ className, onClick }}>{children}</Grid>;
	} else {
		return (
			<div>
				<h1>Invalid Layout Type</h1>
			</div>
		);
	}
};

export default Layout;
