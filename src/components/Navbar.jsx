import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <section className="border min-h-screen flex">
            <nav className="font-poppins flex flex-col gap-10 pt-10">
                <Link>
                    Landing Page
                </Link>
                <Link>
                    Main Page
                </Link>
                <Link>
                    Overview
                </Link>
                <Link>
                    News
                </Link>
                <Link>
                    Account
                </Link>
            </nav>
        </section>
    )
}