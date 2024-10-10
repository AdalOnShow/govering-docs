import { cn } from "../../lib/utils/index.js";

// eslint-disable-next-line react/prop-types
const Container = ({ children, className }) => {
    return (
        <div className={cn("w-full max-w-screen-xl mx-auto px-2.5", className)}>{children}</div>
    );
};

export default Container;