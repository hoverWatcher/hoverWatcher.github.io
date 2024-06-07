import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Social from "./routes/Social";
import Works from "./routes/Works";
import Nav from "./components/Nav";

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/social" element={<Social />} />
                    <Route path="/works" element={<Works />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
