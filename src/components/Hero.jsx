import Container from "./common/Container.jsx";
import Button from "./common/Button.jsx";

const Hero = () => {
    return (
        <section className="pt-10 md:pt-20 lg:pt-28 xl:pt-[142px]">
            <Container className="flex flex-col-reverse md:flex-row justify-center md:justify-end items-center gap-5 md:gap-0">
                <div className="space-y-5 md:space-y-[29px]">
                    <h1 className="font-space-grotesk font-bold text-3xl md:text-4xl lg:text-6xl md:leading-[60px] lg:leading-[76px] max-w-[593px]">Simplify your real estate document analysis</h1>
                    <p className="font-semibold text-base md:text-lg lg:text-xl max-w-[450px] xl:max-w-[520px]">Streamline, Automate, and Secure Your Business Documents with Ai GoverningDoc</p>
                    <Button>Get Started Today</Button>
                </div>
                <div>
                    <img src={"./src/assets/hero-side.svg"} alt="Hero image" className="w-auto" />
                </div>
            </Container>
        </section>
    );
};

export default Hero;