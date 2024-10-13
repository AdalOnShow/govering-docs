import { cn } from "../lib/utils/index.js";

const ReviewCard = ({ image, name, type, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={cn("inline-flex justify-start items-center border border-primary-0 rounded-[20px] w-full lg:w-[400px] xl:w-[491px] py-[1px] px-5 gap-[13px] bg-white", active && "bg-gradient-primary")}>
            <img src={image} alt="david" className="rounded-full" />
            <div className={cn("font-semibold text-accent-0", active && "text-white")}>
                <h4>{name}</h4>
                <p>{type}</p>
            </div>
        </button>
    );
};

export default ReviewCard;