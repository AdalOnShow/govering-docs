import Container from "./common/Container.jsx";
import Heading from "./common/Heading.jsx";
import { ArrowIcon } from "./ArrowIcon.jsx";
import { ProblemSolutionData } from "../lib/data/index.js";

const ProblemSolution = () => {
    return (
        <div>
            <Container>
                <div className="pt-36 flex justify-between items-center gap-2.5">
                    <Heading gradient={"Solution"}> Problem & </Heading>
                    <div className="flex justify-center items-center gap-3.5 sm:gap-[15px]">
                        <button className="bg-white size-9 sm:size-10 rounded-full text-primary-0 flex justify-center items-center shadow-arrow-btn">
                            <ArrowIcon />
                        </button>
                        <button className="bg-gradient-primary size-9 sm:size-10 rounded-full text-white flex justify-center items-center shadow-arrow-btn">
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
                <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-[30px]">
                    {
                        ProblemSolutionData.map((item, index) => (
                            <div key={index}
                                className="w-[272px] h-[350px] rounded-[20px] p-5 space-y-5 shadow-card hover:bg-primary-0 transition-colors duration-150 group">
                                <div
                                    className="bg-primary-0 size-[58px] rounded-full flex justify-center items-center">
                                    <img src={item.img} alt="" />
                                </div>

                                <h1 className="font-bold text-lg text-secondary-0 leading-none group-hover:text-white">{item.title}</h1>

                                <div className="text-accent-0 gap-2.5 group-hover:text-white">
                                    <p>{item.des1}</p>
                                    {item.des2 && <p>{item.des2}</p>}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default ProblemSolution;