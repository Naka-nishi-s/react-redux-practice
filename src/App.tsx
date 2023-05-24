import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Sample1 } from "./components/Sample1";
import { Sample2 } from "./components/Sample2";
import { Sample3 } from "./components/Sample3";
import { Sample4 } from "./components/Sample4";
import { Sample5 } from "./components/Sample5";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Sample1 />} />
          <Route path={"/sample2"} element={<Sample2 />} />
          <Route path={"/sample3"} element={<Sample3 />} />
          <Route path={"/sample4"} element={<Sample4 />} />
          <Route path={"/sample5"} element={<Sample5 />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
