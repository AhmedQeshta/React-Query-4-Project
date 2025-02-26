import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addPost, deletePost, updatePost } from '../services/apis/postsApi';

export default function usePostsMutation() {
  const queryClient = useQueryClient();

  const addPostMutation = useMutation(addPost, {
    onSuccess: () => {
      // Invalidate the cache after adding a new post and refetch the data
      queryClient.invalidateQueries('posts');
    },
  });

  const updatePostMutation = useMutation(updatePost, {
    onSuccess: () => {
      // Invalidate the cache after update Post and refetch the data
      queryClient.invalidateQueries(['posts']);
    },
  });

  const deletePostMutation = useMutation(deletePost, {
    onSuccess: () => {
      // Invalidate the cache after delete Post and refetch the data
      queryClient.invalidateQueries(['posts']);
    },
  });

  return { updatePostMutation, deletePostMutation, addPostMutation };
}
