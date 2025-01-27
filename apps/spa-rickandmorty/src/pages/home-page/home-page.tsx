import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-6xl font-bold mb-4">
        Welcome to the Rick and Morty App
      </h1>
      <img
        src="https://storage.googleapis.com/pod_public/1300/245842.png"
        alt="Rick and Morty"
        className="mb-4"
      />
    </div>
  );
}
