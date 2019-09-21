import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from "../src/components";

export default {
  title: 'Button',
};

export const showcase = () => <React.Fragment>
  <h4>Default</h4>
  <Button variant="text" onClick={() => action('Clicked variant text')}>Text</Button>
  <Button variant="outlined" onClick={() => action('Clicked variant outlined')}>Outlined</Button>
  <Button variant="contained" onClick={() => action('Clicked variant contained')}>Contained</Button>

  <h4>Disabled</h4>
  <Button variant="text" disabled onClick={() => action('Clicked variant text disabled')}>Text</Button>
  <Button variant="outlined" disabled onClick={() => action('Clicked variant outlined disabled')}>Outlined</Button>
  <Button variant="contained" disabled onClick={() => action('Clicked variant contained disabled')}>Contained</Button>
</React.Fragment>;
export const variantText = () => <React.Fragment>
  <Button variant="text" onClick={() => action('clicked')}>Hello Button</Button>
  <Button variant="text" disabled onClick={() => action('clicked')}>Hello Button</Button>
</React.Fragment>;
export const variantOutlined = () => <React.Fragment>
  <Button variant="outlined" onClick={() => action('clicked')}>Hello Button</Button>
  <Button variant="outlined" disabled onClick={() => action('clicked')}>Hello Button</Button>
</React.Fragment>;
export const variantContained = () => <React.Fragment>
  <Button variant="contained" onClick={() => action('clicked')}>Hello Button</Button>
  <Button variant="contained" disabled onClick={() => action('clicked')}>Hello Button</Button>
</React.Fragment>;