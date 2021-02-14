import styled from 'styled-components';
import { RiLightbulbFill } from 'react-icons/ri';

export const ChangeThemeContainer = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  margin: 0.5rem;
  padding: 0.1rem;
  cursor: pointer;
  border-radius: 5px;
  z-index: 2;
`;

export const ChangeThemeIcon = styled(RiLightbulbFill)`
  font-size: 3rem;
  color: ${({ theme }) => theme.fontColor.primary};
`;
