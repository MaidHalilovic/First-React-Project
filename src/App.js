import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=381647fab25349dcad3f8971d7e1b8fa"
      )
      .then((data) => {
        setCards(data.data.articles);
      }, []);
  });


  
  return (
    <div className='veliki div'>
      <Header />
      <Navbar cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
