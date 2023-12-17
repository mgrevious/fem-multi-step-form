// @src/components/ErrorBoundary.jsx
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorBoundary: React.FC = () => {
  const error = useRouteError();
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="mt-12 rounded-xl flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center">Oops!</h1>
        <p className="text-center">
          {error instanceof Error ? error?.message : "Something went wrong."}
        </p>
      </div>
    </section>
  );
};

export default ErrorBoundary;
