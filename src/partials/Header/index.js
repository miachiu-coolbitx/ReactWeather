import React from 'react';
import { Wrapper, Logo, childStyles } from './style';
import { ContentMiddle } from '../../style/style';
import SearchBar from '../../components/Search/index';

export default function Header(props) {
  const { term, onSubmit, handleChange } = props;
  return (
    <Wrapper>
      <ContentMiddle styles={childStyles.ContentMiddle}>
        <Logo>YT Search</Logo>
        <SearchBar
          term={term}
          onSubmit={onSubmit}
          handleChange={handleChange}
        />
      </ContentMiddle>
    </Wrapper>
  );
}
