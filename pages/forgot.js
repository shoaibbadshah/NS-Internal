import Link from "next/link";

export default function forgot() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
        <form
          className="flex flex-col bg-white rounded shadow-lg p-16 mt-12"
          action=""
        >
          <input
            className="flex items-center h-12 px-4 w-64 border mt-2 rounded focus:outline-none focus:ring-2"
            placeholder="Enter Email"
            type="text"
          />

          <button className="flex items-center justify-center h-12 px-6 w-64 bg-purple-600 mt-8 rounded font-semibold text-sm text-purple-100 hover:bg-purple-700">
            Confirm
          </button>
          <Link href="/">
            <button className="flex items-center justify-center h-12 px-6 w-64 bg-gray-200 mt-3 rounded font-semibold text-sm text-white-100 hover:bg-gray-300">
              Go Back
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
