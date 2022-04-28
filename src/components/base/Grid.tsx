import React, { FunctionComponent } from 'react';
import { Component as Props } from '../../lib/interfaces';

const Grid: FunctionComponent<Props> = ({ className, children, onClick }) => {
	return (
		<div className={`grid ${className}`} {...{ onClick }}>
			{children}
		</div>
	);
};

export default Grid;
