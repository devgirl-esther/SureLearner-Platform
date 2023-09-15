import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses";
import AboutUs from "../Pages/About-us/AboutUs";

const RouteComponent = () =>{
    return (

    <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                <Route index path="/" element={<Home />}/>
                <Route path="/courses" element={<Courses />}/>
                <Route path="/about" element={<AboutUs />}/>
                </Route>
                
            </Routes>
    </BrowserRouter>
    )
}
export default RouteComponent