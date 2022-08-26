import { Route, Routes } from "react-router-dom";
import Kids from "../Components/Kids";
import MenPage from "../Components/MenPage";
import WomenPage from "../Components/WomenPage";

const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<WomenPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/design+art" element={<h1>Design + Art Page</h1>} />
        </Routes>
    )
}

export default Allroutes;