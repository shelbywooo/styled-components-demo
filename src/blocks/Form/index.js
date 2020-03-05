import styled from 'styled-components';

import FormGroup from './_FormGroup';
import Input from './_Input';
import Label from './_Label';
import Message from './_Message';

const Form = styled.form`
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
  margin: 30px auto;
  padding: 5px;
  position: relative;
`;

Form.FormGroup = FormGroup;
Form.Input = Input;
Form.Label = Label;
Form.Message = Message;

export default Form;