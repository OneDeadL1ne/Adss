import { useRef } from "react";
import { Button } from "./ui/button";
import Footer from "./Footer";
import { Burger } from "./Burger";
import About from "./About";
import { Phone } from "lucide-react";
import Service from "./Service";
import Portfolio from "./Portfolio";

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
		<div className="flex flex-col min-h-screen bg-[#36353A]   ">
			<header className="z-30 sticky top-0 bg-[#65646A] p-2  text-white @container">
				<div className="flow-root items-center mt-3">
					<div className="float-start flex justify-start items-center">
						<div className="inline-flex @[950px]:hidden font-bold mr-5">
							<Burger links={props} />
						</div>
						<a
							href="/"
							className="hidden @[950px]:inline-flex text-[38px] ml-1 font-extrabold mr-3"
						>
							ADSSCODE
						</a>
						<div className=" mr-auto  hidden @[950px]:inline-flex">
							<Button
								className="text-[17px] mr-5 bg-transparent hover:bg-gray-400"
								onClick={() => {
									aboutRef.current?.scrollIntoView({
										behavior: "smooth",
									});
								}}
							>
								О нас
							</Button>
							<Button
								className="text-[17px] mr-5 bg-transparent hover:bg-gray-400"
								onClick={() => {
									serviceRef.current?.scrollIntoView({
										behavior: "smooth",
									});
								}}
							>
								Наши услуги
							</Button>
							<Button
								className="text-[17px] mr-5 bg-transparent hover:bg-gray-400"
								onClick={() => {
									portfolioRef.current?.scrollIntoView({
										behavior: "smooth",
									});
								}}
							>
								Портфолио
							</Button>
							<Button
								className="text-[17px] mr-5 bg-transparent hover:bg-gray-400"
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
					<div className="flex items-center float-right ">
						<p className="mr-5 ">
							Связаться с нами
							<br />
							+7(901)350-77-86
						</p>
						<Button className="hidden @[950px]:inline-flex bg-white text-black outline outline-2 outline-lime-600 hover:bg-neutral-300">
							Заказать звонок
						</Button>
						<Button className="inline-flex @[950px]:hidden mr-5 h-14 w-14 rounded-full bg-white  hover:bg-neutral-300">
							<Phone color="black" fill="black" strokeWidth={0.1} />
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
				<div id="about" ref={aboutRef}>
					<About contactsRef={contactsRef} />
				</div>

				<div ref={serviceRef} id="service" className="scroll-mt-[70px]">
					<Service contactsRef={contactsRef} />
				</div>
				<div ref={portfolioRef} id="portfolio" className="scroll-mt-[70px]">
					<Portfolio />
				</div>

				<div ref={contactsRef} id="contacts" className="scroll-mt-[70px]">
					<h2 className="text-2xl font-bold mb-6">contacts</h2>
				</div>
			</main>
			<footer className="w-full row-auto">
				<Footer />
			</footer>
		</div>
	);
}
