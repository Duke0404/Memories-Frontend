//Router links
import { Link } from "react-router-dom"

//Icons
import { GrHome, GrCircleInformation, GrFlows } from "react-icons/gr"
import { IconContext } from "react-icons"

const Navbar = (): JSX.Element => (
    <nav
        className="
            flex
            justify-center
        "
    >
        <IconContext.Provider
            value={{
                color: "white",
            }}
        >
            <ul className="flex gap-4">
                <li
                    className="
                        inline
                        px-1.5
                        pb-1.5
                        border-b
                        border-text-1
                        dark:border-text-1-dark
                        cursor-pointer
                        hover:border-accent-secondary-2
                        hover:border-b-2
                        active:border-accent-secondary-1
                    "
                >
                    <Link to="/">
                        <GrHome className="inline mb-0.5 text-text-1 dark:text-text-1-dark" /> Home
                    </Link>
                </li>

                <li
                    className="
                        inline
                        px-1.5
                        pb-1.5
                        border-b
                        border-text-1
                        dark:border-text-1-dark
                        cursor-pointer
                        hover:border-accent-secondary-2
                        hover:border-b-2
                        active:border-accent-secondary-1
                    "
                >
                    <Link to="/about">
                        <GrCircleInformation className="inline mb-0.5" /> About
                    </Link>
                </li>

                <li
                    className="
                        inline
                        px-1.5
                        pb-1.5
                        border-b
                        border-text-1
                        dark:border-text-1-dark
                        cursor-pointer
                        hover:border-accent-secondary-2
                        hover:border-b-2
                        active:border-accent-secondary-1
                    "
                >
                    <Link to="/all">
                        <GrFlows className="inline mb-0.5" /> All Entries
                    </Link>
                </li>
            </ul>
        </IconContext.Provider>
    </nav>
)

export default Navbar