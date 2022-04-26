import React, { FunctionComponent } from 'react';
import { ButtonProps } from '../../lib/interfaces';

const Button: FunctionComponent<ButtonProps> = ({
	label,
	icon,
	className,
	onClick,
}) => {
	return (
		<button {...{ className, onClick }}>
			{icon}
			{label}
		</button>
	);
};

export default Button;
