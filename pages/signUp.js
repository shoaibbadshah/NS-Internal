import Image from "next/image";
import Link from "next/link";

export default function signUp() {
  return (
    <div>
      <div className="relative">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none"
          src="/bg.jpg"
          alt="bg"
        />

        <div className="relative z-1 sm:ml-16 md:ml-48 flex items-center h-screen w-1/2">
          <div className="lg:w-1/2 bg-white rounded shadow-2xl p-8 m-4">
            <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
              Register
            </h1>
            <form action="/" method="post">
              <div className="flex flex-col mb-4">
                <label
                  className="mb-2 font-bold text-lg text-gray-900"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="border py-2 px-3 text-grey-800"
                  type="text"
                  name="first_name"
                  id="first_name"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  className="mb-2 font-bold text-lg text-gray-900"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  className="border py-2 px-3 text-grey-800"
                  type="text"
                  name="last_name"
                  id="last_name"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  className="mb-2 font-bold text-lg text-gray-900"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border py-2 px-3 text-grey-800"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  className="mb-2 font-bold text-lg text-gray-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border py-2 px-3 text-grey-800"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label
                  className="mb-2 font-bold text-lg text-gray-900"
                  htmlFor="confirmpassword"
                >
                  Confirm Password
                </label>
                <input
                  className="border py-2 px-3 text-grey-800"
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                />
              </div>

              <button
                className="flex justify-center hover:bg-purple-700 bg-purple-500 px-3 py-2 text-white text-xs font-semibold mx-auto rounded"
                type="submit"
              >
                Create Account
              </button>
            </form>
            <Link href="/" passHref={true}>
              <p
                className="block cursor-pointer hover:text-purple-700 w-full text-center no-underline mt-4 text-sm
                text-gray-700 "
              >
                Already have an account? Log In
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
