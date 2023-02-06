import "./App.css";
import Cart from "./page/Cart";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/Login";

import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
