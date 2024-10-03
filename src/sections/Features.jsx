import {Element} from "react-scroll";

import {details, features} from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Features = () => {
    return (
        <section>
            <Element name="features">
                <div className="container">
                    <ul className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
                        {features.map(({id, icon, caption, title, text, button}) => (
                            <li
                                key={id}
                                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
                            >
                                <div className="w-full flex justify-start items-start">
                                    <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                                        <div className="w-0.5 h-16 bg-s3"/>

                                        <img
                                            src={icon}
                                            className="size-28 object-contain"
                                            alt={title}
                                        />
                                    </div>
                                </div>

                                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                                    {title}
                                </h2>
                                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
                                <Button icon={button.icon}>{button.title}</Button>
                            </li>
                        ))}

                        <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden feature-h-line">
                            {details.map(({id, icon, title}) => (
                                <li key={id}
                                    className="relative pt-16 px-4 pb-14 feature-v-line">
                                    <div
                                        className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                                        <img
                                            src={icon}
                                            alt={title}
                                            className="size-17/20 object-contain z-20"
                                        />
                                    </div>

                                    <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                                        {title}
                                    </h3>
                                </li>
                            ))}
                        </ul>
                    </ul>
                </div>
            </Element>
        </section>
    );
};
export default Features;