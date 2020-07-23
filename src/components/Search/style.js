import styled from 'styled-components';
import colors from '../../style/colors';
import { IconButton } from '@material-ui/core';
//import Input from '@material-ui/core/Input';
//import IconButton from '@material-ui/core/IconButton';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

// export const Input = styled()`
//   .MuiInput-underline {
//     border-color: red;
//   }
//   .MuiInput-underline:before {
//     border-bottom: 2px solid green;
//   }
// `;

export const TestIcon = styled(IconButton)`
  color: ${colors.font};
`;

export const SearchIcon = styled(SearchOutlinedIcon)`
  color: ${colors.font};
  &:hover {
    color: #fff;
  }
`;
