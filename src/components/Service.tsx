import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Button } from "./ui/button";
import Dart from "@/assets/images/techs/dart.svg?react";
import Firebase from "@/assets/images/techs/firebase.svg?react";
import Swift from "@/assets/images/techs/swift.svg?react";
import Kotlin from "@/assets/images/techs/kotlin.svg?react";
import Flutter from "@/assets/images/techs/flutter.svg?react";

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
			<div className="bg-[#65646A] text-white  flex justify-center ">
				<div className="flex justify-center  max-w-[1300px]">
					<Tabs
						defaultValue="account"
						className=" @[900px]:w-[900px] @[1200px]:w-[2000px]"
					>
						<TabsList className="grid @[1200px]:w-full grid-cols-2  ">
							<TabsTrigger
								value="account"
								className="data-[state=active]:border-b-2 p-2 mr-2  border-[#A8ABAF]  uppercase"
							>
								<p className="uppercase text-[20px]">услуги</p>
							</TabsTrigger>
							<TabsTrigger
								value="password"
								className="data-[state=active]:border-b-2 p-2 ml-2 border-[#A8ABAF] uppercase "
							>
								<p className="uppercase text-[20px]">технологии</p>
							</TabsTrigger>
						</TabsList>

						<div className="">
							<TabsContent value="account" className="w-full">
								<div className="grid grid-rows-3 @[900px]:grid-cols-3 @[900px]:grid-rows-1 ">
									<div className="text-center  max-w-[500px] @[900px]:mr-10">
										<p className="font-bold text-2xl mt-2 mb-2">
											Разработка с нуля под ключ
										</p>
										<p>
											Создадим с нуля по-настоящему результативное iOS /
											Android / Кросс-платформенное приложение, основываясь на
											смоем многолетнем опыте разработки
										</p>
										<Button
											className="text-[17px]  bg-transparent hover:bg-gray-400"
											onClick={OnClick}
										>
											Заказать
										</Button>
									</div>
									<div className="text-center max-w-[500px]">
										<p className="font-bold text-2xl mt-2 mb-2">
											Доработка продукта
										</p>
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
									<div className="text-center max-w-[500px] @[900px]:mr-10">
										<p className="font-bold text-2xl mt-2 mb-2">
											Перенос на кросс-платформу
										</p>
										<p>
											Перенесем ваше iOS / Android приложение на
											кросс-платформу и сократим стоимость разработки и
											поддержки на 40%
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
							<TabsContent className="w-full mb-3" value="password">
								<div className="p-4   grid grid-rows-2 grid-cols-2 @[600px]:grid-cols-4 @[600px]:grid-rows-1 @[900px]:grid-cols-5 @[900px]:grid-rows-1 ">
									<div className="inline-block ">
										<div className="flex justify-center">
											<Kotlin height={130} />
										</div>

										<p className="text-center">Kotlin</p>
									</div>
									<div className="inline-block ">
										<div className="flex justify-center">
											<Flutter height={130} />
										</div>

										<p className="text-center">Flutter</p>
									</div>
									<div className="inline-block ">
										<div className="flex justify-center">
											<Dart height={130} />
										</div>

										<p className="text-center">Dart</p>
									</div>
									<div className="inline-block ">
										<div className="flex justify-center">
											<Swift height={130} />
										</div>

										<p className="text-center">Swift</p>
									</div>
									<div className="hidden @[900px]:inline-block  ">
										<div className="flex justify-center">
											<Firebase className="" height={130} />
										</div>

										<p className="text-center">Firebase</p>
									</div>
								</div>
								<div className="@[900px]:hidden w-full inline-block  ">
									<div className="flex justify-center items-center">
										<div>
											<Firebase className="" height={130} />
											<p className="text-center">Firebase</p>
										</div>
									</div>
								</div>
							</TabsContent>
						</div>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
