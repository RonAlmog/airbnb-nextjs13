import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Search() {
  return (
    <div className="">
      <Header />
      <main className="flex">
        <section>
          <p className="text-xs">300+ Stays for you</p>
          <h1 className="text-3xl font-semibold nt-2 mb-6">Stays in mars</h1>
          <div className="hidden lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
