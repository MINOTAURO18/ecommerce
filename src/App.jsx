import NavBar from "./components/NavBar/NavBar";
import Home from "./views/home/Home";
import Products from "./views/products/Products";
import About from "./views/about/About";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route
          path="/"
          element={
            <TransitionGroup>
              <CSSTransition key="home" classNames="fade" timeout={200}>
                <Home/>
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/products"
          element={
            <TransitionGroup>
              <CSSTransition key="products" classNames="fade" timeout={200}>
                <Products/>
              </CSSTransition>  
            </TransitionGroup>
          }
        />
        <Route
          path="/about"
          element={
            <TransitionGroup>
              <CSSTransition key="about" classNames="fade" timeout={200}>
                <About/>
              </CSSTransition>
            </TransitionGroup>
          }
        />
        
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
