import styled from 'styled-components';
import colors from './colors';

export const Wrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 15px;
  background-color: ${colors.secondary};
  min-height: 100vh;
`;

export const ContentMiddle = styled.div`
  width: 100%;
  max-width: 960px;
  margin: auto;
  ${(props) => props.styles}
`;
