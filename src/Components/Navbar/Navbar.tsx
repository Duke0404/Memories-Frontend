//Router links
import { Link } from "react-router-dom"

const Navbar = (): JSX.Element => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/about">About</Link>
            </li>

            <li>
                <Link to="/all">All Entries</Link>
            </li>
        </ul>
    </nav>
)

export default Navbar