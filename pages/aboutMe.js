import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="my-48  mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">
          This is my demo shop for all the JAMstack stoke!
        </p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl sm:text-6xl md:text-7xl">
          JAMstack E-Comm
        </p>
      </h1>
      <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
        I am Fran the Dev, I am a newbie JAMstack coder who enjoys building demo
        sites for use cases on all channels of industry. In my spare time, I
        also like to rock climb. Which is why I added climbing gear to this
        shop! Help me revolutionzie the way the web works! Fran the man
      </h2>
      <p>Hello World</p>
      <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
        <Link href="https://www.netlify.com/">
          <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800">
            Netlify
          </a>
        </Link>
        <Link href="https://jamstack.org/">
          <a className="inline-flex items-center font-semibold text-gray-900 hover:text-gray-800">
            JAMstack
          </a>
        </Link>
      </div>
    </div>
  );
}
