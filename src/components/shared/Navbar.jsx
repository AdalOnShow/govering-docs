import Container from '../common/Container.jsx'
import Logo from "./Logo.jsx";
import Button from "../common/Button.jsx";
import { navItems } from "../../lib/data/index.js";
import MobileNav from "./MobileNav.jsx";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenusOpen] = useState(false)
    const toggleMenu = () => setIsMenusOpen((prevState) => !prevState);

    useEffect(() => {
        const bodyClass = document.body.classList;
        isMenuOpen ? bodyClass.add("no-scroll") : bodyClass.remove("no-scroll");
        return () => bodyClass.remove("no-scroll");
    }, [isMenuOpen]);
    return (
        <nav className="py-5 ">
            <Container >
                <div className="flex justify-between items-center gap-2.5 px-2 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full">
                    <Logo />

                    <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-4">
                        {navItems.map((item, index) => (
                            <a href={item.link} key={index}>
                                <p className="text-accent-0 text-sm xl:text-base hover:text-primary-0 transition-colors duration-150">{item.name}</p>

                            </a>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <button onClick={toggleMenu} className="lg:hidden block text-accent-0">
                            <div className="space-y-1">
                                <span className="block w-6 h-0.5 bg-black" />
                                <span className="block w-6 h-0.5 bg-black" />
                                <span className="block w-6 h-0.5 bg-black" />
                            </div>
                        </button>
                        <Button>Get Started Today</Button>
                    </div>
                </div>
                {isMenuOpen && <MobileNav toggleMenu={toggleMenu} />}
            </Container>
        </nav>
    );
};

export default Navbar;