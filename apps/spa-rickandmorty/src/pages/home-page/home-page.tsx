import React from 'react';

export default function HomePage() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold mb-4">
        Welcome to the Rick and Morty App
      </h1>
      <img
        className="mb-4 w-1/2"
        src="https://storage.googleapis.com/pod_public/1300/245842.png"
        alt="Rick and Morty"
      />
    </div>
  );
}
