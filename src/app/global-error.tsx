"use client";

import { useRouter } from "next/navigation";

const GlobalErrorHandler = ({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) => {
  const router = useRouter();

  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="max-w-md text-center space-y-6">
          <h1 className="text-4xl font-bold text-primary">
            Oops! Something went wrong.
          </h1>

          <p className="text-secondary">
            We encountered an unexpected error. Please try again.
            {error.message}
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => unstable_retry()}
              className="px-6 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition"
            >
              Try Again
            </button>
            <button
              onClick={() => router.push("/")}
              className="px-6 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition"
            >
              Go Home
            </button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalErrorHandler;
