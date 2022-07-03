import React from 'react';

import LinkList from './LinkList';

import {ReactComponent as ArrowRight} from '../../icons/arrow-right.svg';

export default {
    title: 'Components/LinkList',
    component: LinkList,
};

const Template = (args) => <LinkList {...args}>{args.children}</LinkList>;

const exampleLink = <a href='#' onClick={e => e.preventDefault()}>I'm a Link!</a>;

export const Single = (args) => <LinkList {...args}>{exampleLink}</LinkList>;