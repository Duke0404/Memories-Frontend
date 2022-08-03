//Router links
import { Link } from "react-router-dom"

const Navbar = (): JSX.Element => (
    <nav
        className="
            flex
            justify-center
        "
    >
        <ul className="flex gap-4">
            <li
                className="
                    inline
                    px-1.5
                    pb-1.5
                    border-b
                    border-text-1
                    cursor-pointer
                    hover:border-accent-secondary-2
                    hover:border-b-2
                    active:border-accent-secondary-1
                "
            >
                <Link to="/">Home</Link>
            </li>

            <li
                className="
                    inline
                    px-1.5
                    pb-1.5
                    border-b
                    border-text-1
                    cursor-pointer
                    hover:border-accent-secondary-2
                    hover:border-b-2
                    active:border-accent-secondary-1
                "
            >
                <Link to="/about">About</Link>
            </li>

            <li
                className="
                    inline
                    px-1.5
                    pb-1.5
                    border-b
                    border-text-1
                    cursor-pointer
                    hover:border-accent-secondary-2
                    hover:border-b-2
                    active:border-accent-secondary-1
                "
            >
                <Link to="/all">All Entries</Link>
            </li>
        </ul>
    </nav>
)

export default Navbar