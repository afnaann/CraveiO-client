import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useMutateFn = (query) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (funcArgs)=> funcArgs(),
    onSuccess: () => {
      queryClient.invalidateQueries([query]);
    },
    onError: (err) => {
      console.log("this is error", err);
    },
  });
  return mutate;
};

export const useQueryFn = (func, query) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [query],
    queryFn: func,
  });
  if (error) {
    console.log(error);
  }
  return data
};
