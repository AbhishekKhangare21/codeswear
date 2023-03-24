import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>codeswear</title>
          <meta name="description" content="CodesWear.com-Wear the code" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div>
          <img src="/home1.jpg" className="h-96 w-full" alt="" />
        </div>
        <Footer />
      </div>
    </>
  );
}
