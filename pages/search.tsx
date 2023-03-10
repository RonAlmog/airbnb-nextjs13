import { useRouter } from "next/router";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { format, parse } from "date-fns";
import { toDate } from "date-fns/esm";
import InfoCard from "./components/InfoCard";
import MapPage from "./components/MapPage";
type Props = {
  searchResults: Info[];
};
function Search({ searchResults }: Props) {
  const router = useRouter();
  const { location, noOfGuests } = router.query;
  const startDate: string =
    router.query.startDate?.toString() || new Date().toString();
  const endDate: string =
    router.query.endDate?.toString() || new Date().toString();
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold nt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filtersz</p>
          </div>
          <div className="flex flex-col"></div>
          {searchResults.map((item) => (
            <InfoCard key={item.img} info={item} />
          ))}
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[40%] sticky top-[135px] h-[calc(100vh-135px)]">
          <MapPage searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults: Info[] = await fetch(
    "https://www.jsonkeeper.com/b/5NPS"
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}
