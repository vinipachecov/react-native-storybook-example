import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { BufferView } from './decorators';
import { Form } from '../components/Form';

storiesOf('Form', module)
  .addDecorator(BufferView)
  .add("default", () => 
    <Form>
      <View style={{ flex: 1, backgroundColor: '#e6e6e6'}} />
    </Form>  
  )
  .add("with header", () => 
    <Form header="HEADER">
      <View style={{ flex: 1, backgroundColor: '#e6e6e6'}} />
    </Form>  
  )
  .add("with header and subheader", () => 
    <Form header='hello' subheader='This is a subititle.'>
      <View style={{ flex: 1, backgroundColor: '#e6e6e6'}} />
    </Form>  
  )