//Router links
import { Link } from "react-router-dom"

//Icons
import { GrHome, GrCircleInformation, GrFlows } from "react-icons/gr"

const Navbar = (): JSX.Element => (
    <nav
        className="
            flex
            justify-center
        "
    >
        
        <ul className="flex gap-4">
            <Link to="/">
                <li
                    className="
                        inline
                        px-2
                        pb-1.5
                        pt-1
                        border-b
                        border-text-1
                        text-text-1
                        dark:bg-text-1-dark
                        cursor-pointer
                        hover:border-accent-secondary-2
                        hover:border-b-2
                        active:border-accent-secondary-1
                        rounded-lg
                    "
                >
                    <GrHome className="inline mb-0.5 text-text-1 dark:text-text-1-dark" /> Home
                </li>
            </Link>

            <Link to="/about">
                <li
                    className="
                        inline
                        px-2
                        pb-1.5
                        pt-1
                        border-b
                        border-text-1
                        text-text-1
                        dark:bg-text-1-dark
                        cursor-pointer
                        hover:border-accent-secondary-2
                        hover:border-b-2
                        active:border-accent-secondary-1
                        rounded-lg
                    "
                >
                    <GrCircleInformation className="inline mb-0.5" /> About
                </li>
            </Link>

            <Link to="/all">
                <li
                    className="
                        inline
                        px-2
                        pb-1.5
                        pt-1
                        border-b
                        border-text-1
                        text-text-1
                        dark:bg-text-1-dark
                        cursor-pointer
                        hover:border-accent-secondary-2
                        hover:border-b-2
                        active:border-accent-secondary-1
                        rounded-lg
                    "
                >
                        <GrFlows className="inline mb-0.5" /> All Entries
                </li>
            </Link>
        </ul>
    </nav>
)

export default Navbar