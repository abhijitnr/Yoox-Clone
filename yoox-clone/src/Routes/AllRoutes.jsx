import { Route, Routes } from "react-router-dom";

const Allroutes = () => {
    return (
        <Routes>
            <Route path="/women" element={<h1>Women Page</h1>} />
            <Route path="/men" element={<h1>Men Page</h1>} />
            <Route path="/kids" element={<h1>Kids Page</h1>} />
            <Route path="/design+art" element={<h1>Design + Art Page</h1>} />
        </Routes>
    )
}

export default Allroutes;