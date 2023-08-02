import styled from 'styled-components/native';

interface ModulesColorProps {
  background?: string;
}

interface ModulesProps {
  disabled?: boolean;
}

interface ProcessProps {
  disabled?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background: #fafafa;
`;

{/* HEADER */}
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;

export const Welcome = styled.View``;

export const Notification = styled.TouchableOpacity`
  background: #fff;
  padding: 10px;
  border-radius: 32px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.10);
  position: relative;
`;

export const NotificationOnOff = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #2DA3F2;
  position: absolute;
  top: 2px;
  right: 2px;
`;

{/* MODULOS */}

export const Modules = styled.TouchableOpacity<ModulesProps>`
  background: #fff;
  width: 100%;
  height: 76px;
  border-radius: 12px;
  padding-left: 16px;
  margin-bottom: 16px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  opacity: ${({ disabled }) => disabled ? 0.4 : 1};

`;

export const ModulesColor = styled.View<ModulesColorProps>`
  width: 32px;
  height: 100%;
  background: ${({ background }) => background ? background : '#333'};
  border-radius: 0px 12px 12px 0px;

  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.10);
`;
{/* PROCESS */}

export const ProcessContainer = styled.TouchableOpacity<ProcessProps>`

  margin-top: 8px;
  margin-right: 16px;

  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`;

export const Process = styled.View`
  height: 112px;
  width: 164px;
  background: #fff;

  flex-direction: row;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.10);
  border-radius: 8px;

  justify-content: space-evenly;
  align-items: center;
`;

/**
 * 4
 * 8
 * 12
 * 16
 * 20
 * 24
 * 28
 * 32
 */
