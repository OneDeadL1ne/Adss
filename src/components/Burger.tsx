import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BurgerProps } from "./Layout";
import { useState } from "react";
import BurgerIcon from "@/assets/images/burger.svg?react";

export function Burger({
	links: { aboutRef, contactsRef, portfolioRef, serviceRef },
}: {
	links: BurgerProps;
}) {
	const [open, setOpen] = useState(false);
	return (
		<Sheet onOpenChange={setOpen} open={open}>
			<SheetTrigger asChild>
				<div>
					<BurgerIcon height={40} />
				</div>
			</SheetTrigger>
			<SheetContent side="left" className="bg-[#36353A]">
				<SheetHeader>
					<SheetTitle>
						<a className=" text-3xl font-bold mr-5">ADSSCODE</a>
					</SheetTitle>
				</SheetHeader>
				<div className="grid grid-rows-4 ">
					<Button
						className=""
						onClick={() => {
							aboutRef.current?.scrollIntoView({
								behavior: "smooth",
							});
							setOpen(false);
						}}
					>
						О нас
					</Button>
					<Button
						className=""
						onClick={() => {
							serviceRef.current?.scrollIntoView({
								behavior: "smooth",
							});
							setOpen(false);
						}}
					>
						Наши услуги
					</Button>
					<Button
						className=""
						onClick={() => {
							portfolioRef.current?.scrollIntoView({
								behavior: "smooth",
							});
							setOpen(false);
						}}
					>
						Портфолио
					</Button>
					<Button
						className=""
						onClick={() => {
							contactsRef.current?.scrollIntoView({
								behavior: "smooth",
							});
							setOpen(false);
						}}
					>
						Контакты
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
}
