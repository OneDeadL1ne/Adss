import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Button } from "./ui/button";
import Dart from "@/assets/images/techs/dart.svg?react";
import Firebase from "@/assets/images/techs/firebase.svg?react";
import Swift from "@/assets/images/techs/swift.svg?react";
import Kotlin from "@/assets/images/techs/kotlin.svg?react";

export default function Service({
	contactsRef,
}: {
	contactsRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
	const OnClick = () => {
		contactsRef.current?.scrollIntoView({
			behavior: "smooth",
		});
	};
	return (
		<div className="@container">
			<div className="bg-[#65646A] text-white scroll-mt-[1000px] flex justify-center">
				<div className="flex justify-center items-center max-w-[2300px]">
					<Tabs
						defaultValue="account"
						className="w-full mr-[50px] ml-[50px] @[900px]mr-[100px] @[900px]ml-[100px]"
					>
						<TabsList className="grid w-full grid-cols-2  ">
							<TabsTrigger
								value="account"
								className="data-[state=active]:border-b-2 p-2 mr-2  border-[#A8ABAF]  uppercase"
							>
								<p className="uppercase text-[20px]">услуги</p>
							</TabsTrigger>
							<TabsTrigger
								value="password"
								className="data-[state=active]:border-b-2 p-2 ml-2 border-[#A8ABAF] uppercase"
							>
								<p className="uppercase text-[20px]">технологии</p>
							</TabsTrigger>
						</TabsList>
						<TabsContent value="account" className="w-full">
							<div className="grid grid-rows-3 @[900px]:grid-cols-3 justify-center">
								<div className="justify-center">
									<p>Разработка с нуля под ключ</p>
									<p>
										Создадим с нуля по-настоящему результативное iOS / Android /
										Кросс-платформенное приложение, основываясь на смоем
										многолетнем опыте разработки
									</p>
									<Button
										className="text-[17px]  bg-transparent hover:bg-gray-400"
										onClick={OnClick}
									>
										Заказать
									</Button>
								</div>
								<div>
									<p>Перенос на кросс-платформу</p>
									<p>
										Перенесем ваше iOS / Android приложение на кросс-платформу и
										сократим стоимость разработки и поддержки на 40%
									</p>
									<Button
										className="text-[17px]  bg-transparent hover:bg-gray-400"
										onClick={OnClick}
									>
										Заказать
									</Button>
								</div>
								<div>
									<p>Доработка продукта</p>
									<p>
										Проанализируем текущее состояние проекта, предложим пути
										решения и доработаем его до нужного результата
									</p>
									<Button
										className="text-[17px]  bg-transparent hover:bg-gray-400"
										onClick={OnClick}
									>
										Заказать
									</Button>
								</div>
							</div>
						</TabsContent>
						<TabsContent className="flex justify-start" value="password">
							<div className="grid grid-rows-2 grid-cols-2 @[900px]:grid-cols-5 ">
								<div>
									<Kotlin height={130} />
									<p>Kotlin</p>
								</div>
								<div>
									<img src="/flutter.png" className="h-[130px]" />
									<p>Flutter</p>
								</div>
								<div>
									<Dart height={130} />
									<p>Dart</p>
								</div>
								<div>
									<Swift height={130} />
									<p>Swift</p>
								</div>
								<div className="col-start-1 col-end-2 place items-center">
									<Firebase className="" height={130} />
									<p className="">Firebase</p>
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
