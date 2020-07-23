import styled from 'styled-components';
import flex from '../../style/flex';
import colors from '../../style/colors';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: calc(100% - 30px);
  padding: 10px 15px;
  background-color: ${colors.primary};
  transition: background-color 200ms linear;
  z-index: 9999;
  ${(props) => props.style}
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
  color: ${colors.font};
  ${(props) => props.style}
`;

export const childStyles = {
  ContentMiddle: `
      ${flex.horizontal}
      ${flex.centerHorizontalV}
      ${flex.spaceBetween}
    `,
};
