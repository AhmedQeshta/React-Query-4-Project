import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { usePostsMutation } from '../Hooks';
import { getPosts } from '../services/apis/postsApi';
import Form from './Form';
import PostItem from './PostItem';

function PostsList() {
  const [title, setTitle] = useState('');

  const { updatePostMutation, deletePostMutation, addPostMutation } = usePostsMutation();

  const { data: posts, status } = useQuery(['posts'], getPosts, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });

  const handleUpdate = (post) => {
    updatePostMutation.mutate({ ...post, title: `${post.title} updated` });
  };

  const handleDelete = ({ id }) => {
    deletePostMutation.mutate({ id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPostMutation.mutate({
      title,
      body: `${title} is a body`,
      userId: 1,
    });
    setTitle('');
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Posts</h1>
      <Form handleSubmit={handleSubmit} title={title} setTitle={setTitle} />
      <ul>
        {posts?.map((post) => (
          <PostItem
            key={post?.id}
            post={post}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
}

export default PostsList;
