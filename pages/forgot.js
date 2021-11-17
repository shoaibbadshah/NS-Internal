import { EmailIcon } from "@chakra-ui/icons";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";

export default function forgot() {
  return (
    <div className="relative">
      <Image
        layout="fill"
        className="object-center opacity-40 object-cover pointer-events-none"
        src="/tree.jpg"
        alt="bg"
      />
      <div className="flex flex-col relative z-1 drop-shadow-3xl pt-14 items-center w-screen h-screen text-gray-700">
        <form
          className="flex flex-col bg-white rounded shadow-lg p-16 mt-12"
          action=""
        >
          <div>
            <Flex direction="column" align="center">
              <EmailIcon fontSize={40} />
              <Heading size="md">Forgot Password?</Heading>
              <div className="max-w-xs text-center my-4">
                <Text className="flex flex-wrap">
                  Please enter the registered email and we will send you the
                  reset link!
                </Text>
              </div>
            </Flex>
          </div>
          <Flex flexDirection="column" align="center">
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
          </Flex>
        </form>
      </div>
    </div>
  );
}
