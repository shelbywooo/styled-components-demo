import React from 'react';
import './App.css';
import styled from 'styled-components';

import A from './elements/CTA/A';
import Card from './blocks/Card';
import Form from './blocks/Form';

import Button from './elements/CTA/Button'

const Container = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
`

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Styled Components</h1>
        <Button color="white" colorHover="palevioletred" primary>Test Button</Button>
        <Button color="palevioletred" colorHover="white">Test Button</Button>
        <Button color="white" colorHover="palevioletred" primary>Test Button</Button>

        <Card>
            <Card.Title>
              BizStream
            </Card.Title>
            <Card.Title coloredTitle>Styled Title</Card.Title>
        </Card>
        <A href="http:www.google.com" target="_blank" modifiers={['large']}>Test Global Link</A>
        <h2>Form</h2>
        <Form>
          <Form.FormGroup>
            <Form.Label>Label</Form.Label>
            <Form.Input type="text"/>
            <Form.Message>This is the validation message</Form.Message>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>Label 2</Form.Label>
            <Form.Input type="text"/>
            <Form.Message>This is the validation message</Form.Message>
          </Form.FormGroup>
        </Form>
      </Container>
    </div>
  );
}

export default App;
