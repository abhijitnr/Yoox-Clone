import { Route, Routes } from "react-router-dom";
import MenPage from "../Components/MenPage";
import WomenPage from "../Components/WomenPage";

const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<WomenPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/kids" element={<h1>Kids Page</h1>} />
            <Route path="/design+art" element={<h1>Design + Art Page</h1>} />
        </Routes>
    )
}

export default Allroutes;