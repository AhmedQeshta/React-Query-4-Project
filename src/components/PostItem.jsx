import React from 'react';

const PostItem = ({ post, handleUpdate, handleDelete }) => {
  return (
    <li>
      <div>
        <span>{post.title}</span>
        <button onClick={() => handleUpdate(post)}>Update</button>
        <button onClick={() => handleDelete(post)}>Delete</button>
      </div>
    </li>
  );
};

export default PostItem;
