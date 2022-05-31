import Head from "next/head";
import Image from "next/image";
import spotifyImage from "../public/Spotify_logo_without_text.svg";

export default function Home() {
  return (
    <div className="flex grid grid-rows-2 grid-columns-1 h-screen bg-[url('../public/liquid-cheese.svg')] bg-no-repeat bg-cover">
      <Head>
        <title>admix</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex m-auto">
        <h1 className="text-6xl">WELCOME TO ADMIX</h1>
      </div>
      <div className="flex rounded-2xl m-auto bg-black hover:drop-shadow-2xl">
        <div className="px-2 m-auto ">
          <Image
            className="px-3"
            src={spotifyImage}
            alt={"spotify logo without text"}
            width={40}
            height={40}
          />
        </div>
        <button className="m-auto bg-green-500 p-5 drop-shadow-md rounded-2xl transition ease-in-out delay-50  duration-300">
          <h1 className="text-3xl font-bold text-2xl px-4">Login</h1>
        </button>
      </div>
      {/*</div>*/}
    </div>
  );
}
