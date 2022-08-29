import {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Layaut from "components/Layaut";
import Main from "pages/Main";
import Blog from "pages/Blog";
import Post from "pages/Post";
import Partnyor from "pages/Partnyor";
import Analitika from "pages/Analitika";
import PodKlyuch from "pages/PodKlyuch";
import Zemlya from 'pages/Zemlya';
import Strategii from 'pages/Strategii';
import Personal from 'pages/Personal';
import Komanda from 'pages/Komanda';
import Avtomatizachia from 'pages/Avtomatizachia';

import CreateProduct from 'pages/CreateProduct';

import "./App.scss";




function App() {
  const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      <Layaut>
        <Routes>
          <Route path="/" element={<Main offsetY={offsetY} />} />
          <Route path="pod-klyuch" element={<PodKlyuch offsetY={offsetY} />} />
          <Route path="blog" element={<Blog offsetY={offsetY} />}>
          </Route>
          <Route path="blog/:id" element={<Post offsetY={offsetY}/>} />
          <Route path="zemlya" element={<Zemlya offsetY={offsetY} />} />
          <Route path="partnyor" element={<Partnyor offsetY={offsetY} />} />
          <Route path="personal" element={<Personal offsetY={offsetY} />} />
          <Route path="strategii" element={<Strategii offsetY={offsetY} />} />
          <Route path="komanda" element={<Komanda offsetY={offsetY} />} />
          <Route path="analitika" element={<Analitika offsetY={offsetY} />} />
          <Route path="avtomatizaciya" element={<Avtomatizachia offsetY={offsetY} />} />
          <Route path="produkt" element={<CreateProduct offsetY={offsetY} />} />
          <Route path="*" element={<Main offsetY={offsetY}/>} />
        </Routes>
      </Layaut>
    </>
  );
}

export default App;
