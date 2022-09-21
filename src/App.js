import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Layaut from "components/Layaut";
import Main from "pages/Main";
import Blog from "pages/Blog";
import Post from "pages/Post";
import Partnyor from "pages/Partnyor";
import Analitika from "pages/Analitika";
import PodKlyuch from "pages/PodKlyuch";
import Zemlya from "pages/Zemlya";
import Strategii from "pages/Strategii";
import Personal from "pages/Personal";
import Komanda from "pages/Komanda";
import Avtomatizachia from "pages/Avtomatizachia";
import CreateProduct from "pages/CreateProduct";
import NotFoundPage from "pages/notFoundPage";

import "./App.scss";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Layaut>
            <Routes>
              <Route element={<PageLayout />}>
                <Route path="/" element={<Main offsetY={offsetY} />} />
                <Route
                  path="pod-klyuch"
                  element={<PodKlyuch offsetY={offsetY} />}
                />
                <Route path="blog" element={<Blog offsetY={offsetY} />}></Route>
                <Route path="blog/:id" element={<Post offsetY={offsetY} />} />
                <Route path="zemlya" element={<Zemlya offsetY={offsetY} />} />
                <Route
                  path="partnyor"
                  element={<Partnyor offsetY={offsetY} />}
                />
                <Route
                  path="personal"
                  element={<Personal offsetY={offsetY} />}
                />
                <Route
                  path="strategii"
                  element={<Strategii offsetY={offsetY} />}
                />
                <Route path="komanda" element={<Komanda offsetY={offsetY} />} />
                <Route
                  path="analitika"
                  element={<Analitika offsetY={offsetY} />}
                />
                <Route
                  path="avtomatizaciya"
                  element={<Avtomatizachia offsetY={offsetY} />}
                />
                <Route
                  path="produkt"
                  element={<CreateProduct offsetY={offsetY} />}
                />
                <Route path="*" element={<Main offsetY={offsetY} />} />
              </Route>
              <Route path="/" element={<NotFoundPage offsetY={offsetY} />} />
            </Routes>
          </Layaut>
        </>
      )}
    </div>
  );
}
export default App;
