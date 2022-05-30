import { error } from 'console';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../store/hooks';

type Props = {
  src: string,
  placeholder: string,
  label: string,
  value: string,
}

const InputForm: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e: any) => setValue(e.target.value);

  return (
    <FormWrapper>
      <InputWrapper>
        <FormIco src={props.src}/>
        <Input type="text" id="input-password" placeholder={props.placeholder} value={value} onChange={handleChange}/>
      </InputWrapper>
      <InputLabel className="form-label">{props.label}</InputLabel>
    </FormWrapper>
  );
};

export default InputForm;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  max-width: 413px;
  width: 100%;

`;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  // width: 413px;
`;

const FormIco = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  z-index: 2;
  top: 18px;
  left:24px;
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 24px;
  display: flex;
  background: #F0F4EF;
  border-radius: 16px;
  border: none;
  padding: 18px 18px 18px 64px;
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

const InputLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: 0.75px;
  color: #344966;
  margin-top: 9px;
`;
