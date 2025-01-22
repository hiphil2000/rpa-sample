import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Editor, Home} from "../../pages";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/workflow/:id" element={<Editor/>}/>
            </Routes>
        </BrowserRouter>
    )
}