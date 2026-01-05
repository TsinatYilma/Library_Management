import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout.tsx";
import "./App.css";
import "./index.css";
import Home from "./pages/home";
import Books from "./pages/books";
import Members from "./pages/members.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* path="/" */}
        <Route path="/books" element={<Books />} />
        <Route path="/members" element={<Members />} />
        {/* path="/books" */}
      </Route>
    </Routes>
  );
}

export default App;
