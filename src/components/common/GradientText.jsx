import { cn } from "../../lib/utils/index.js";

// eslint-disable-next-line react/prop-types
const GradientText = ({ children, className }) => {
    return (
        <span className={cn("bg-gradient-to-b from-[#00D2FF] to-[#059DBE] bg-clip-text text-transparent", className)}>{children}</span>
    );
};

export default GradientText;