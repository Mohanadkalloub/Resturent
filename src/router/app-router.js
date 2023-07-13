import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import FoodPage from "../pages/FoodPage";
import GalleryPage from "../pages/GalleryPage";
import BlogsPage from "../pages/BlogsPage";

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/Home" element={<HomePage />}/>
            <Route path="/About" element={<AboutPage />}/>
            <Route path="/Food" element={<FoodPage />}/>
            <Route path="/Gallery" element={<GalleryPage />}/>
            <Route path="/Blogs" element={<BlogsPage />}/>
        </Routes>
    );
};
export default AppRouter;