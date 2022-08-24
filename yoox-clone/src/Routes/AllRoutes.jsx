import { Route, Routes } from "react-router-dom";
import WomenPage from "../Components/WomenPage";

const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<WomenPage />} />
            <Route path="/men" element={<h1>Men Page</h1>} />
            <Route path="/kids" element={<h1>Kids Page</h1>} />
            <Route path="/design+art" element={<h1>Design + Art Page</h1>} />
        </Routes>
    )
}

export default Allroutes;