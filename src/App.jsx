import Navbar from "./components/shared/Navbar.jsx";
import Footer from "./components/shared/Footer.jsx";
import Hero from "./components/Hero.jsx";
import ProblemSolution from "./components/ProblemSolution.jsx";
import Reviews from "./components/Reviews.jsx";
import Partners from "./components/Partners.jsx";
import Faq from "./components/Faq.jsx";
import Note from "./components/Note.jsx";

const App = () => {
    return (
        <main className="font-nunito-sans bg-[url(../src/assets/hero-bg.svg)] min-h-screen bg-no-repeat bg-top">
            <Navbar />
            <Hero />
            <ProblemSolution />
            <Reviews />
            <Partners />
            <Faq />
            <Note />
            <Footer />
        </main>
    );
};

export default App;