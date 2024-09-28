import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" href="/images/Logo.gif" as="image" />
      </Head>
      <div className="h-[100vh] w-[100vw] bg-[#0f0f10] flex flex-col justify-center items-center gap-[170px]">
        <Image
          src={"/images/Logo.gif"}
          width={270}
          height={330}
          alt="Logo Image"
          priority
        />
        <div className="flex justify-between items-center md:w-[450px] w-[250px]">
          <Link
            href="/register"
            className="bg-[#7A844A] text-[#0F0F10] p-2 rounded md:w-[200px] w-[100px] text-center font-semibold"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="bg-white text-[#0F0F10] p-2 rounded md:w-[200px] w-[100px] text-center font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
