import Heading from "./common/Heading.jsx";
import Container from "./common/Container.jsx";
import { reviews } from "../lib/data/index.js";
import { Star } from "./ArrowIcon.jsx";
import { useState } from "react";
import ReviewCard from "./ReviewCard.jsx";
import { cn } from "../lib/utils/index.js";

const Reviews = () => {
    const [active, setActive] = useState(1)
    const activeReview = reviews[active]

    return (
        <section className="bg-[#F6F6F6] my-14 sm:my-20 lg:my-[100px] xl:my-[150px] py-10 xl:py-20">
            <Container>
                <Heading gradient={"Our Client"} className="text-center">Reviews From </Heading>

                <div className="pt-10 flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 xl:gap-[93px]">
                    <div className="flex w-full gap-5">
                        <div className="bg-[#E2DED8] w-[5px] rounded-[20px]">
                            <div className="space-y-[15px]">
                                {
                                    Array.from(Array(3).keys()).map((i) => (
                                        <div key={i}
                                            className={cn("w-[5px] h-[92px] rounded-[20px] bg-transparent", active === i && "bg-gradient-primary")} />))
                                }
                            </div>
                        </div>
                        <div className="space-y-[15px] flex-grow">
                            {
                                reviews.map((review, index) => (
                                    <ReviewCard key={index} {...review} active={(active === index)}
                                        onClick={() => setActive(index)} />
                                ))
                            }
                        </div>
                    </div>

                    <div className="space-y-[30px] w-full">
                        <h1 className="font-bold text-[30px]">{activeReview.review.title}</h1>
                        <div className="flex justify-start items-center gap-[5px]">
                            {
                                Array.from(Array(activeReview.review.stars).keys()).map((i) => (<Star key={i} />))
                            }
                        </div>
                        <p className="text-base text-accent-0 max-w-[500px]">{activeReview.review.details}.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Reviews;