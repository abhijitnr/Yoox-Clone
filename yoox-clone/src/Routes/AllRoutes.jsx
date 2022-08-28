import { Route, Routes } from "react-router-dom";
import Register from "../Authentication/Register";
import DesignArt from "../Components/DesignArt";
import Kids from "../Components/Kids";
import MenPage from "../Components/MenPage";
import WomenPage from "../Components/WomenPage";

const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<WomenPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/design+art" element={<DesignArt />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default Allroutes;