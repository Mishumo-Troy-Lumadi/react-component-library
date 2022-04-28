import React, { FunctionComponent } from 'react';
import { Component as Props } from '../../lib/interfaces';

const Row: FunctionComponent<Props> = ({ className, children, onClick }) => {
	return (
		<div className={`flex flex-row ${className}`} {...{ onClick }}>
			{children}
		</div>
	);
};

export default Row;
