import Container from "./common/Container.jsx";
import Heading from "./common/Heading.jsx";
import { partners } from "../lib/data/index.js";

const Partners = () => {
    return (
        <section className="px-2.5">
            <Container className="bg-[#E6F9FD] max-w-[1276px] py-[50px] px-3 rounded-[20px]">
                <Heading gradient={"Partners"} className="text-center">Our </Heading>

                <div className="pt-10 flex flex-wrap justify-center items-center gap-x-[30px] gap-y-7">
                    {
                        partners.map((item, index) => (
                            <div key={index}
                                className="w-[274px] h-[101px] bg-white border border-[#D6D6D6] rounded-xl flex justify-center items-center">
                                <img src={item.src} alt={item.alt} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
};

export default Partners;