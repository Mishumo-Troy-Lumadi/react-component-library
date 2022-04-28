import React, { FunctionComponent } from 'react';
import { Component as Props } from '../../lib/interfaces';

const Card: FunctionComponent<Props> = ({ className, children, onClick }) => {
	return (
		<div
			{...{ onClick }}
			className={`rounded shadow transition duration-300 ${className}`}>
			{children}
		</div>
	);
};

export default Card;
