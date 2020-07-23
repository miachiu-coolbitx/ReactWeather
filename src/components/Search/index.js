import React from 'react';
import InputBase from '@material-ui/core/InputBase';
//import IconButton from '@material-ui/core/IconButton';
//import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
//import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { TestIcon, SearchIcon } from './style';

export default function SearchBar(props) {
  const { term, onSubmit, handleChange } = props;
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <FormControl>
        <Input
          id="standard-adornment-password"
          type="text"
          value={term}
          onChange={handleChange}
          placeHolder="Search"
          endAdornment={
            <InputAdornment position="end">
              <TestIcon type={'submit'} onClick={() => {}}>
                <SearchIcon />
              </TestIcon>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
}
