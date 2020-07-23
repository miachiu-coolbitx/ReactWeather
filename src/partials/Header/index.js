import React from 'react';
import { Wrapper, Logo, childStyles } from './style';
import { ContentMiddle } from '../../style/style';

export default function Header() {
  return (
    <Wrapper>
      <ContentMiddle styles={childStyles.ContentMiddle}>
        <Logo>What's the wheather?</Logo>
      </ContentMiddle>
    </Wrapper>
  );
}
