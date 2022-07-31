//Router
import { BrowserRouter, Route, Routes } from "react-router-dom"

//Components
import Navbar from "../Navbar/Navbar"

//Pages
import Home from "../../Pages/Home/Home"
import About from "../../Pages/About/About"
import EntriesList from "../../Pages/EntriesList/EntriesList"
import Entry from "../../Pages/Entry/Entry"
import NotFound from "../../Pages/NotFound/NotFound"

const App = (): JSX.Element => (
    <>
        <BrowserRouter>
            <h1
                className="
                    text-7xl
                    font-title
                    font-extrabold
                    text-center
                "
            >Memories</h1>

            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/all" element={<EntriesList />} />
                <Route path="/entry/:entryURL" element={<Entry />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </>
)

export default App