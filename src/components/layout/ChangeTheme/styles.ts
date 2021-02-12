import styled from 'styled-components';
import get from 'lodash/get';
import { RiLightbulbFill } from 'react-icons/ri';

export const ChangeThemeContainer = styled.button`
  background-color: ${({ theme }) => get(theme, `secondary`)};
  position: fixed;
  margin: 0.5rem;
  padding: 0.1rem;
  cursor: pointer;
  border-radius: 5px;
`;

export const ChangeThemeIcon = styled(RiLightbulbFill)`
  font-size: 3rem;
  color: ${({ theme }) => get(theme, `fontColor.primary`)};
`;
