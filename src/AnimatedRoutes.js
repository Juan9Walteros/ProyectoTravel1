import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import About from "containers/pages/About";
import Destination from "containers/pages/Destination";
import Tour from "containers/pages/Tour";
import Blog from "containers/pages/Blog";

import { AnimatePresence } from "framer-motion";


function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>

                <Route path="*" element={<Error404 />} />

                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Destination" element={<Destination />} />
                <Route path="/Tour" element={<Tour />} />
                <Route path="/Blog" element={<Blog />} />

            </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes