import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyles';

interface IBoxProps {
  width?: string | object;
  height?: string | object;
  flex?: string | object;
  display?: string | object;
  flexWrap?: string | object;
  flexDirection?: string | object;
  alignItems?: string | object;
  justifyContent?: string | object;
  backgroundColor?: string | object;
  backgroundImage?: string | object;
  backgroundRepeat?: string | object;
  backgroundPosition?: string | object;

  padding?: string | object;
}

export const Box = styled.div<IBoxProps>`
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexWrap')}
  ${propToStyle('flexDirection')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('padding')}
`;
