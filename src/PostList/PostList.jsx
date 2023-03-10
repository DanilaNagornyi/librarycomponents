import React from 'react';
import Grid from '@mui/material/Grid';
import Post from "../Post/Post";

const PostList = ({posts}) => {
  return (
      <Grid container spacing="40px">
        {posts.map(item => (
            <Post key={item._id} {...item} />
        ))}
        {/*  <Post key={posts[0]._id} {...posts[0]} />*/}
      </Grid>
  );
};

export default PostList;