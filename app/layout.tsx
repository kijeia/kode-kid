import './globals.css';
import { PropsWithChildren } from 'react';
import React from 'react';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return <html lang="en">{children}</html>;
};
export default RootLayout;
