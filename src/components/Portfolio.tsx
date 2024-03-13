import { useEffect, useState } from "react";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

export default function Portfolio() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const First = current === 1;
	const Second = current === 2;

	return (
		<div className="@container">
			<div className="flex justify-center bg-[#36353A]  items-center   scroll-mt-[70px] text-white ">
				<div>
					<div>
						<p className="text-center font-bold text-[60px]">Портфолио</p>
					</div>
					<Carousel className=" max-w-6xl" setApi={setApi}>
						<CarouselContent className="p-4">
							<CarouselItem key={1}>
								<div className="flex h-full items-center justify-center">
									<div className="grid  @[900px]:grid-cols-2">
										<div className="order-1 justify-center ">
											<p className="text-wrap text-center @[900px]:text-start text-[27px] font-bold">
												Мобильное <br />
												приложение «KSMess»
											</p>
											<p className="w-[300px] text-wrap text-center">
												Социальная сеть для колледжа с чатами, новостной
												лентой и актуальным расписанием занятий.
											</p>
										</div>

										<div className="flex justify-center gap-3 order-2">
											<img
												src="/ksmess1.png"
												className="max-h-[280px] @[900px]:max-h-[380px]"
											/>
											<img
												src="/ksmess2.png"
												className="max-h-[280px] @[900px]:max-h-[380px]"
											/>
										</div>
									</div>
								</div>
							</CarouselItem>
							<CarouselItem key={2}>
								<div className="flex h-full items-center justify-center">
									<div className="grid  @[900px]:grid-cols-2">
										<div className="order-1 justify-center ">
											<p className="text-wrap text-center @[900px]:text-start text-[27px] font-bold">
												Мобильное приложение <br />
												«Осталось до»
											</p>
											<p className="w-[300px] text-wrap text-center">
												Мобильное приложение позволяет отслеживать все свои
												важные события: отпуск, день рождения, годовщину,
												окончание учебы, концерт и многое другое.
											</p>
										</div>
										<div className="flex justify-center gap-3 order-2">
											<img
												src="/todo1.png"
												className="max-h-[280px] @[900px]:max-h-[380px]"
											/>
											<img
												src="/todo2.png"
												className="max-h-[280px] @[900px]:max-h-[380px]"
											/>
										</div>
									</div>
								</div>
							</CarouselItem>
						</CarouselContent>
						<div className="flex gap-3  justify-center items-center">
							<CarouselPrevious className="h-10 w-10 bg-[#A8ABAF]  outline-[#A8ABAF] hover:bg-[#BCBCBC]" />
							<div className="flex  justify-center items-center gap-2">
								<div
									className={
										First
											? `bg-white text-transparent h-[14px] w-[32px]  rounded-full duration-300`
											: `bg-[#A8ABAF] text-transparent h-[14px] w-[14px]  rounded-full duration-300`
									}
								>
									1
								</div>
								<div
									className={
										Second
											? `bg-white text-transparent h-[14px] w-[32px]  rounded-full duration-300`
											: `bg-[#A8ABAF] text-transparent h-[14px] w-[14px]  rounded-full duration-300`
									}
								>
									1
								</div>
							</div>
							<CarouselNext className="h-10 w-10 bg-[#A8ABAF]  outline-[#A8ABAF] hover:bg-[#BCBCBC]" />
						</div>
					</Carousel>
				</div>
			</div>
		</div>
	);
}
