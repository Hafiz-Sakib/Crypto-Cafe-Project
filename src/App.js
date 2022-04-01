import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import "./App.css";
import Header from "./components/Header/Header";
import Coins from "./components/Coins/Coins";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import NotFound from "./components/NotFound/NotFound";
import BdAddress from "./components/Contact/BdAddress";
import UsAddress from "./components/Contact/UsAddress";

const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/coins" element={<Coins />}></Route>
        <Route path="/coin-details/:id" element={<CoinDetails />}></Route>
        <Route path="/contact" element={<Contact />}>
          <Route path="/bd-adress" element={<BdAddress />} />
          <Route path="/usa-adress" element={<UsAddress />} />
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
