import Button from "./components/common/Button.jsx";
import Heading from "./components/common/Heading.jsx";

const App = () => {
    return (
        <main>
            <h2 className="text-4xl text-center">Hello World</h2>
            <Button>Primary Button</Button>
            <Button className={"bg-white text-black"}>Secondary Button</Button>
            <Heading gradient={"Problem"}>Problem & </Heading>
        </main>
    );
};

export default App;