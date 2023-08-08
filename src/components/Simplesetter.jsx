import React, { useContext } from 'react';
import { Context, CLEAR, RESET, SETDATA1 } from '../providers/Provider';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components'; // Přidáno



const Simplesetter = () => {
  const [, dispatch] = useContext(Context);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    dispatch({ type: SETDATA1, payload: data.textdata });
    navigate('/');
  };

  return (
    <div>
      <ButtonWrapper>
        <StyledButton
          onClick={() => {
            dispatch({ type: CLEAR });
            navigate('/');
          }}
          color="#f44336"
          hoverColor="#d32f2f"
        >
          {CLEAR}
        </StyledButton>
        <StyledButton
          onClick={() => {
            dispatch({ type: RESET });
            navigate('/');
          }}
          color="#ffc107"
          hoverColor="#ff9800"
        >
          {RESET}
        </StyledButton>
      </ButtonWrapper>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <input
              defaultValue="string"
              {...register('textdata', { required: true })}
            />
            {errors.textdata && (
              <ErrorMessage>This field is required</ErrorMessage>
            )}
          </InputWrapper>
          <StyledButton type="submit" textColor="white" hoverColor="#2196f3">
            Submit
          </StyledButton>
        </form>
      </div>
    </div>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ color }) => color || 'white'};
  color: ${({ textColor }) => textColor || 'black'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || 'black'};
    color: ${({ hoverTextColor }) => hoverTextColor || 'white'};
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
display: flex;
  justify-content: space-around;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

export default Simplesetter;
