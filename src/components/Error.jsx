import { useRouteError } from "react-router-dom";

function Error(){

    const error = useRouteError();
    console.error(error); // Log error for debugging

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink-100 text-gray-800">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg mb-2">Something went wrong.</p>
        <p className="text-gray-500 italic">
          {error.statusText || error.message}
        </p>
        <a
          href="/"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
        >
          Go Back Home
        </a>
      </div>
    );
}

export default Error;