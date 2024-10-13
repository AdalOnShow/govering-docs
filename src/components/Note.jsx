import Container from "./common/Container.jsx";
import Button from "./common/Button.jsx";

const Note = () => {
    return (
        <section className="mt-[50px] sm:mt-20 lg:mt-[100px] xl:mt-[150px] px-2.5">
            <Container className="bg-gradient-primary rounded-[20px] py-10 md:py-14 pr-6 md:pr-16 pl-6 md:pl-10 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-2.5">
                <div className="text-white space-y-5 md:space-y-[30px]">
                    <h1 className="font-bold text-2xl md:text-[35px] lg:text-[46px] leading-8 md:leading-[45px] lg:leading-[64px] sm:max-w-[500px] lg:max-w-[566px]">Ready to Simplify Your Document Management?</h1>
                    <p className="font-bold text-sm md:text-base max-w-[500px]">Sign up today and experience the power of AI-driven legal documentation. </p>
                </div>
                <Button className="bg-white text-secondary-0 min-w-fit">Get Started Now</Button>
            </Container>
        </section>
    );
};

export default Note;