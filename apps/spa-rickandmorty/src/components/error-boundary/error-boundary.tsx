import { useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div className="h-dvh w-dvh p-4">
      <h1>
        Uh oh, something went terribly wrong{' '}
        <span role="img" aria-label="worried face">
          😩
        </span>
      </h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <button onClick={() => (window.location.href = '/')}>
        Click here to reload the app
      </button>
    </div>
  );
}
