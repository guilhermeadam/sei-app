import { styled } from 'styled-components/native';

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 32px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 118px;
  gap: 8px;
`;

export const InputContainer = styled.View`
/* flex:1; */
  flex-direction: row;
  align-items: center;
  /* background: red; */
  position: relative;
`;

export const Input = styled.TextInput`
  height: 56px;
  width: 100%;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid #CCC;
  color: #999;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  padding: 14px 18px;
  border-radius: 44px;
  background: ${({ disabled }) => disabled ? '#ccc' : '#2DA3F2'};
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;
