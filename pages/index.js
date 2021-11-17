import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex">
        <div className="w-1/2 h-screen">
          <Image
            src="/login.jpg"
            alt="image"
            layout="responsive"
            objectFit="cover"
            width={1080}
            height={1030}
          />
        </div>

        <div className="w-1/2 flex justify-center mt-16">
          <div className="w-full max-w-xl py-3">
            <div className="flex justify-center pb-3">
              <Image src="/logo.png" alt="logo" width={250} height={60} />
            </div>
            <form className="bg-white shadow-lg rounded px-36 pt-6 pb-8 mb-4 border-t">
              <p className="text-center text-purple-900 pt-10 text-sm font-semibold">
                SIGN IN
              </p>
              <p className="text-center text-gray-500 text-xs italic pt-4 pb-4">
                Your Wedding Day Timeline starts here!
              </p>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm" htmlFor="email">
                  Email*
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-3 mt-1 bg-purple-50 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm"
                  htmlFor="password"
                >
                  Password*
                </label>
                <input
                  className="shadow appearance-none border rounded bg-purple-50 w-full py-1 px-3 mb-2 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-purple-700 hover:bg-purple-400 text-white py-2 px-8 rounded-md focus:outline-none focus:shadow-outline text-xs font-bold"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              <div className="pb-8">
                <Link href="/signUp" passHref={true}>
                  <p className="flex justify-center text-xs mt-5 text-gray-500 cursor-pointer hover:text-purple-700">
                    Don&apos;t have an account? Sign Up
                  </p>
                </Link>
                <Link href="/forgot" passHref={true}>
                  <p className="text-center text-xs mt-1 text-gray-500 hover:text-purple-700 cursor-pointer">
                    Forgot Password?
                  </p>
                </Link>
              </div>
            </form>
            <p className="text-center text-gray-300 text-sm pt-3">
              &copy;2021 Wedding Day Timeline. All Rights Reserved.
            </p>
            <div className="flex justify-around pt-2 text-sm text-gray-500 px-10">
              <p>About Us</p>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
