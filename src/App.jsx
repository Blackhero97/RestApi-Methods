import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CardList from "./Pages/CardList";

import Erorr from "./Pages/Erorr";
import Header from "./components/Header";
import AddElement from "./Pages/AddElement";
import Edit from "./Pages/Edit";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list/:id" element={<CardList />} />
            <Route path="/add" element={<AddElement />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Erorr />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
