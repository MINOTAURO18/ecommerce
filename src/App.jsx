import NavBar from "./components/NavBar/NavBar";
import Home from "./views/home/Home";
import Products from "./views/products/Products";
import About from "./views/about/About";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.css";
import Details from "./views/details/Details";

function App() {
  const location = useLocation();
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <div>
      <NavBar
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Routes>
        <Route
          path="/"
          element={
            <TransitionGroup>
              <CSSTransition key="home" classNames="fade" timeout={200}>
                <Home />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/products"
          element={
            <TransitionGroup>
              <CSSTransition key="products" classNames="fade" timeout={200}>
                <Products
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/about"
          element={
            <TransitionGroup>
              <CSSTransition key="about" classNames="fade" timeout={200}>
                <About />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <Details
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
      </Routes>

      {location.pathname == "/" ||
      location.pathname === "/products" ||
      location.pathname === "/about" ? (
        <Footer />
      ) : null}
    </div>
  );
}

export default App;
