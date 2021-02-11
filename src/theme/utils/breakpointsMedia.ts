import { css, FlattenSimpleInterpolation } from 'styled-components';
import { breakpoints } from '../breakpoints';

export function breakpointsMedia(
  cssByBreakpoint: Record<string, FlattenSimpleInterpolation>,
) {
  const breakpointNames = Object.keys(breakpoints);

  return breakpointNames
    .filter(breakpointName => Boolean(cssByBreakpoint[breakpointName]))
    .map(breakpointName => {
      const size = breakpoints[breakpointName];

      return css`
        @media only screen and (min-width: ${size}px) {
          ${cssByBreakpoint[breakpointName]}
        }
      `;
    });
}
