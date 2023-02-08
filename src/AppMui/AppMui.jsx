import React from 'react';
import AppHeader from "../AppHeader/AppHeader";
import { Container } from '@mui/material';
import { postData } from './posts.js';
import PostList from "../PostList/PostList";

const AppMui = () => {
  return (
      <>
          <AppHeader />
          <Container>
            <PostList posts={postData} />
          </Container>
      </>
  );
};

export default AppMui;