import React from "react";
import "./App.scss";
import {
  AboutUs,
  Benefits,
  Delivery,
  Footer,
  Header,
  Intro,
  Products,
  Reviews,
} from "./components";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Intro />
        <AboutUs />
        <Benefits />
        <Products />
        <Delivery />
        <Reviews />
      </main>
      <Footer />
      {/* <a href="https://ru.freepik.com/free-photo/vegetables-on-a-basket_896466.htm#page=6&query=%D0%BE%D0%B2%D0%BE%D1%89%D0%B8%20%D1%84%D1%80%D1%83%D0%BA%D1%82%D1%8B&position=49&from_view=keyword">Изображение от onlyyouqj</a> на Freepik */}
    </div>
  );
}

export default App;
