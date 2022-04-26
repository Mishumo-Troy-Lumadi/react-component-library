import React, { FunctionComponent } from 'react';
import { Button as Props } from '../../lib/interfaces';

const Button: FunctionComponent<Props> = ({
	label,
	icon,
	className,
	onClick,
}) => {
	return (
		<button
			className={`${
				label ? (icon ? 'px-4 py-2 gap-2' : 'px-4 py-2') : 'p-4'
			} ${className}`}
			{...{ onClick }}>
			{icon}
			{label}
		</button>
	);
};

export default Button;
