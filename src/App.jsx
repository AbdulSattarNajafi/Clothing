import { Routes, Route } from "react-router-dom";

import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Signin from "./pages/signin/Signin";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
