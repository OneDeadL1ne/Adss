import { useRef } from "react";
import { Button } from "./ui/button";
import Footer from "./Footer";
import { Burger } from "./Burger";

export interface BurgerProps {
    aboutRef: React.MutableRefObject<HTMLDivElement | null>;
    serviceRef: React.MutableRefObject<HTMLDivElement | null>;
    portfolioRef: React.MutableRefObject<HTMLDivElement | null>;
    contactsRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Layout() {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const serviceRef = useRef<HTMLDivElement | null>(null);
    const portfolioRef = useRef<HTMLDivElement | null>(null);
    const contactsRef = useRef<HTMLDivElement | null>(null);

    const props: BurgerProps = {
        aboutRef,
        serviceRef,
        portfolioRef,
        contactsRef,
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#36353A]  ">
            <header className="z-10 sticky top-0 bg-[#65646A]   text-white @container">
                <div className="flow-root justify-center mt-3">
                    <div className="float-start flex justify-start items-center">
                        <a className="inline-flex @[950px]:hidden font-bold mr-5">
                            <Burger links={props} />
                        </a>
                        <a className="hidden @[950px]:inline-flex text-3xl font-bold mr-5">
                            ADSSCODE
                        </a>
                        <div className=" mr-auto  hidden @[950px]:inline-flex">
                            <Button
                                className=" mr-5"
                                onClick={() => {
                                    aboutRef.current?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                О нас
                            </Button>
                            <Button
                                className="mr-5 "
                                onClick={() => {
                                    serviceRef.current?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Наши услуги
                            </Button>
                            <Button
                                className="mr-5"
                                onClick={() => {
                                    portfolioRef.current?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Портфолио
                            </Button>
                            <Button
                                className="mr-5"
                                onClick={() => {
                                    contactsRef.current?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Контакты
                            </Button>
                        </div>
                    </div>
                    <div className="flex float-right ">
                        <p className="mr-5 ">
                            Связаться с нами
                            <br />
                            +7(901)350-77-86
                        </p>
                        <Button className="hidden @[950px]:inline-flex bg-white text-black outline outline-2 outline-lime-600">
                            Заказать звонок
                        </Button>
                        <Button className="inline-flex @[950px]:hidden mr-5">
                            XD
                        </Button>
                    </div>
                </div>
            </header>
            <main
                className="min-w-full flex-grow   gap-4 mb-6"
                onClick={(event: React.SyntheticEvent) => {
                    event.preventDefault();
                    const target = event.target as HTMLAnchorElement;
                    const id = target.getAttribute("href")?.replace("#", "");
                    const element = document.getElementById(String(id));
                    element?.scrollIntoView({
                        behavior: "instant",
                    });
                }}
            >
                <div
                    ref={aboutRef}
                    className="h-screen scroll-mt-[70px]"
                    id="about"
                >
                    <h2 className="text-2xl font-bold mb-6">About</h2>
                </div>
                <div
                    ref={serviceRef}
                    id="service"
                    className="h-screen scroll-mt-[70px]"
                >
                    <h2 className="text-2xl font-bold mb-6">service</h2>
                </div>
                <div
                    ref={portfolioRef}
                    id="portfolio"
                    className="h-screen scroll-mt-[70px]"
                >
                    <h2 className="text-2xl font-bold mb-6">portfolio</h2>
                </div>

                <div
                    ref={contactsRef}
                    id="contacts"
                    className="h-screen scroll-mt-[70px]"
                >
                    <h2 className="text-2xl font-bold mb-6">contacts</h2>
                </div>
            </main>
            <footer className="w-full row-auto">
                <Footer />
            </footer>
        </div>
    );
}
