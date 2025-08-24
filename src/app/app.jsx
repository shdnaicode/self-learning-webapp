import { Routes, Route } from "react-router-dom";
import Login from "./routes/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
