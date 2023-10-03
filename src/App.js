import React from "react";

// import Home from "./pages/home/home"; 
import Header from "./pages/home/header";
import Counter from "./pages/home/counter"
import Blog from "./pages/home/blog"
import "./App.css";

function App() {
  return (
    <div>
     
      {/* <Home />  */}
      <Header />
      <Counter />
      <Blog />
    </div>
  );
}

export default App;
