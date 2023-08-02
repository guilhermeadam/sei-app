import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background: #fafafa;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Resources = styled.View`
  margin-top: 38px;
`;

export const Resource = styled.TouchableOpacity`
  background: #fff;
  width: 100%;
  height: 76px;
  border-radius: 12px;
  padding-left: 16px;
  margin-bottom: 16px;

  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.10);

  flex-direction: row;
  align-items: center;
  gap: 34px;
  opacity: ${({ disabled }) => disabled ? 0.4 : 1};

`;
