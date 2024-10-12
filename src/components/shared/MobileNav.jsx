import Logo from "./Logo.jsx";
import { navItems } from "../../lib/data/index.js";

const MobileNav = ({ toggleMenu }) => {
    return (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden">
            <div className="flex justify-between items-center pb-6">
                <Logo />
                <button onClick={toggleMenu} className="text-black text-2xl self-end" aria-label="Close Menu">&times;</button>
            </div>

            <div className="space-y-4">
                {
                    navItems.map((item, index) => (
                        <a href={item.link} key={index} className="block text-lg text-accent-0 active:text-primary-0 transition-colors duration-150">
                            {item.name}
                        </a>
                    ))
                }
            </div>
        </div>
    );
};

export default MobileNav;