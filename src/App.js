import { Route, Routes } from "react-router-dom";

import { Detail, Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
