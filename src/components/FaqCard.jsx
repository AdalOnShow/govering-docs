import { ArrowIcon } from "./ArrowIcon.jsx";

// eslint-disable-next-line react/prop-types
const FaqCard = ({ q, a, onClick, isActive }) => {
    return (
        <div>
            <div className="shadow-card rounded-[20px] py-5 px-[30px]">
                <button onClick={onClick}
                    className="w-full inline-flex justify-between items-center gap-5">
                    <h1 className="font-bold text-lg lg:text-[26px] lg:leading-[36px] text-secondary-0 text-start">{q}</h1>

                    <div className="text-primary-0">
                        <ArrowIcon className={isActive ? `-rotate-90` : `rotate-90`} />
                    </div>
                </button>
                {isActive && (
                    <p className="text-accent-0 pt-5 text-sm lg:text-base">{a}</p>
                )}
            </div>
        </div>
    );
};

export default FaqCard;