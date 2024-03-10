import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

export default function Portfolio() {
	return (
		<div className="@container">
			<div className="flex justify-center bg-[#36353A]  items-center   scroll-mt-[70px] text-white">
				<Carousel className="w-full max-w-xs">
					<CarouselContent>
						{Array.from({ length: 5 }).map((_, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<span className="text-4xl font-semibold">{index + 1}</span>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="bg-black" />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	);
}
