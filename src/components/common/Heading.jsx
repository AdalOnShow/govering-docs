import { cn } from "../../lib/utils/index.js";
import GradientText from "./GradientText.jsx";

// eslint-disable-next-line react/prop-types
const Heading = ({ children, className, gradient }) => {
    return (
        <h1 className={cn("font-space-grotesk font-bold text-2xl md:text-[35px]  lg:text-[46px] md:leading-[45px] lg:leading-[58.7px]", className)}>{children} <GradientText>{gradient}</GradientText>
        </h1>
    );
};

export default Heading;