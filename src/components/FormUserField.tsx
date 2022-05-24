import React from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  placeholder: string;
  src: string;
};

const FormUserField: React.FC<Props> = (props) => {
  return (
    <FormField>
      <FormIco src={props.src}/>
      <InputWrapper>
        <Label>{props.label}</Label>
        <Input type='text' placeholder={props.placeholder}/>
      </InputWrapper>
    </FormField>
  );
};

export default FormUserField;

const FormField = styled.div`
  display: flex;
  margin-top: 30px;
  width: 522px;
  height: 64px;
  background: #F0F4EF;
  border-radius: 16px;
`;

const FormIco = styled.img`
  width: 24px;
  height: 24px;

  margin-top: 20px;
  margin-left:24px;
  margin-right: 16px;
`;

const InputWrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

const Input = styled.input`
    width: 413px;
    height: 64px;
    display: flex;
    background: #F0F4EF;
    border-radius: 16px;
    border: none;
    /* padding: 18px 18px 18px 64px; */
    outline: none;
    align-items: center;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: black;
`;

const Label = styled.label`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    display: flex;
    align-items: center;
    letter-spacing: 0.75px;
    color: #344966;
    margin-top: 6px;
`;
