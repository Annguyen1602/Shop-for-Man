import React from "react";
import { Shop, Sales, FlexContent, Stories, Footer } from "./components";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import {
  shopapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";
const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Shop shopapi={shopapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
