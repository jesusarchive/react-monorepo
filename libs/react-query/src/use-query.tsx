import React from 'react';

export type UseQueryProps<T> = {
  queryKey: unknown[];
  queryFn: (...args: unknown[]) => Promise<T>;
};

export default function useQuery<T>({ queryKey, queryFn }: UseQueryProps<T>) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<Error | null>(null);

  const stringifiedQueryKey = React.useMemo(
    () => JSON.stringify(queryKey),
    [queryKey]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedQueryFn = React.useCallback(queryFn, [stringifiedQueryKey]);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await memoizedQueryFn();
        setData(result);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('An unknown error occurred')
        );
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [memoizedQueryFn, stringifiedQueryKey]);

  return { isLoading, data, error };
}
