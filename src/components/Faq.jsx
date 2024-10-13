import Container from "./common/Container.jsx";
import Heading from "./common/Heading.jsx";
import { useState } from "react";
import { faqs } from "../lib/data/index.js";
import FaqCard from "./FaqCard.jsx";

const Faq = () => {
    const [active, setActive] = useState(1)
    return (
        <section className="mt-[50px] sm:mt-20 lg:mt-[100px] xl:mt-[150px] relative">
            <Container className="max-w-[982px] relative z-50">
                <Heading gradient="Asked Questions" className="text-center">Frequently </Heading>

                <div className="pt-10 space-y-5">
                    {faqs.map((faq, index) => (
                        <FaqCard key={index} {...faq} onClick={() => setActive(index)} isActive={active === index} />
                    ))}

                </div>
            </Container>
            <img src={"../src/assets/faq-bg-line.svg"} alt="Bg img" className="absolute z-0 -top-[115px] -left-[540px] 2xl:-left-[23.8%]" />
        </section>
    );
};

export default Faq;