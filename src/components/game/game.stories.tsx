/* eslint-disable no-console */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Game, Props } from './game';
import '../../index.css';

export default {
  title: 'Game',
  component: Game,
} as Meta;

const Template: Story<Props> = ({ isXNext = true, status, changeStatus }) => (
  <Game {...{ isXNext, status, changeStatus }} />
);

const changeStatus = () => console.log('Change status.');

export const Default = Template.bind({});
Default.args = {
  status: Array(9).fill(null),
  changeStatus,
};

export const XWin = Template.bind({});
XWin.args = {
  status: ['X', null, 'O', 'X', 'X', null, 'X', 'O', 'O'],
  changeStatus,
};
