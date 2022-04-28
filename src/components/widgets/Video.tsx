import React, { FunctionComponent } from 'react';
import ReactPlayer from 'react-player';
import { Component } from '../../lib/interfaces';
import Layout from '../utilities/Layout';

const Video: FunctionComponent<Component> = ({
	className,
	controls,
	loop,
	muted,
	url
}) => {
	return (
		<Layout className={`aspect-w-16 aspect-h-9 ${className}`}>
			<ReactPlayer
				{...{ controls, loop, muted, url }}
				width='100%'
				height='100%'
			/>
		</Layout>
	);
};

export default Video;
