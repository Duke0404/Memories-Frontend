//Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

//Components
import Navbar from "../Navbar/Navbar"

//Pages
import Home from "../../Pages/Home/Home"
import About from "../../Pages/About/About"
import EntriesList from "../../Pages/EntriesList/EntriesList"
import Entry from "../../Pages/Entry/Entry"

const App = (): JSX.Element => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/all" element={<EntriesList />} />
            <Route path="/entry/:entryURL" element={<Entry />} />
        </Routes>
    </Router>
)

export default App