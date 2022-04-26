import React, { FunctionComponent } from 'react';
import { Card as Props } from '../../lib/interfaces';

const Card: FunctionComponent<Props> = ({ className, children, onClick }) => {
	return (
		<div {...{ onClick }} className={`rounded shadow ${className}`}>
			{children}
		</div>
	);
};

export default Card;
