import Head from "next/head";
import Image from "next/image";
import spotifyImage from "../public/Spotify_logo_without_text.svg";

export default function Home() {
  return (
    <div className="flex grid grid-rows-2 grid-columns-1 h-screen bg-[url('../public/wavey-fingerprint.svg')] bg-repeat">
      <Head>
        <title>admix</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="m-auto">
        <div className="flex border-2 rounded-2xl border-green-500 px-4">
          <div className="pr-4 m-auto ">
            <Image
              className="px-3 md:shrink-0"
              src={spotifyImage}
              alt={"spotify logo without text"}
              width={100}
              height={100}
            />
          </div>
          <div className="flex m-auto border-l-2 border-green-500 pl-4">
            <h1 className="text-9xl font-black text-green-500 ">ADMIX</h1>
          </div>
        </div>
        <div className="">
          <h1 className="text-green-500 text-xl">
            Share link. Create collaborative playlists. Its that easy.
          </h1>
        </div>
      </div>
      <div className="mx-auto">
        <button className="m-auto bg-green-500 hover:bg-green-400 hover:shadow-lg p-5 hover:shadow-green-900 rounded-2xl transition delay-50 duration-300">
          <h1 className="text-3xl font-bold text-3xl px-4 antialiased">
            Login with Spotify
          </h1>
        </button>
      </div>
    </div>
  );
}
