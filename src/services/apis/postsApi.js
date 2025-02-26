import { create } from 'axios';

const postsApi = create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getPosts = async () => {
  const { data } = await postsApi.get('/posts');
  return data;
};

export const addPost = async (post) => {
  return postsApi.post('/posts', post);
};

export const getPost = async ({ id }) => {
  return postsApi.get(`/posts/${id}`);
};

export const updatePost = async (post) => {
  return postsApi.patch(`/posts/${post.id}`, post);
};

export const deletePost = async ({ id }) => {
  return postsApi.delete(`/posts/${id}`, id);
};

export default postsApi;
