import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-600">
      <Head>
        <title>admix</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <button className="mx-auto my-auto bg-green-700 p-5 drop-shadow-md rounded-2xl">
        <h1 className="text-3xl font-bold text-xl  ">Welcome to Admix!</h1>
      </button>
    </div>
  );
}
