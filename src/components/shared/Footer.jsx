import Container from "../common/Container.jsx";
import { navItems, socialIcons } from "../../lib/data/index.js";


const Footer = () => {
    return (
        <footer className="pt-5 lg:pt-24">
            <Container>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2.5 py-5">
                    <h1 className="font-space-grotesk text-xl sm:text-2xl lg:text-lg xl:text-4xl font-bold">Ai GoverningDocs</h1>

                    <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-4">
                        {navItems.map((item, index) => (
                            <a href={item.link} key={index}>
                                <p className="text-accent-0 text-sm xl:text-base hover:text-primary-0 transition-colors duration-150">{item.name}</p>
                            </a>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        {
                            socialIcons.map((item, index) => (
                                <a href={item.link} target="_blank" key={index}>
                                    <img src={item.icon} alt="" className="size-[36px]" />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className="footer-image-color border-t border-transparent mt-5 md:mt-[50px] lg:mt-[106px]">
                    <p className="text-lg text-center leading-[18px] text-[#111] py-5">Ai GoverningDocs 2024. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;