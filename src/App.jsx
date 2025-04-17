import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
// eslint-disable-next-line no-unused-vars
import BlogDetails from "./pages/blogDetails";
import { Routes, Route } from "react-router";
import Header from './components/header'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="p-[20px]">
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog-detail/:id" element={<BlogDetails />}></Route>
        </Routes>
        <Footer />
    </div>
      
    </>
  );
}

export default App;
