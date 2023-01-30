import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import SmallCard from "./components/SmallCard";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  exploreData: Place[];
};

export default function Home({ exploreData }: Props) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard key={item.location} location={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

// we want server rendering!
export async function getStaticProps() {
  //const exploreData = await fetch("https://links.papareact.com/pyp").then(
  const exploreData: Location[] = await fetch(
    "https://www.jsonkeeper.com/b/4G1G"
  ).then((res) => res.json());
  console.log("exploreData:", exploreData);
  return {
    props: {
      exploreData,
    },
  };
}
