import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                {/*<Route path="login" element={<Login />} />*/}
                {/*<Route path="*" element={<PageNotFound />} />*/}
            </Routes>
        </BrowserRouter>
    )
}