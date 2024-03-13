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
            <div className="bg-[#65646A] text-white scroll-mt-[1000px] flex justify-center">
                <div className="flex justify-center items-center max-w-[2300px]">
                    <Tabs
                        defaultValue="account"
                        className="w-full mr-[50px] ml-[50px] @[900px]mr-[100px] @[900px]ml-[100px]"
                    >
                        <div className="mr-1 ml-1">
                            <TabsList className="grid w-full grid-cols-2  ">
                                <TabsTrigger
                                    value="account"
                                    className="data-[state=active]:border-b-2 p-2 mr-2  border-[#A8ABAF]  uppercase"
                                >
                                    <p className="uppercase text-[20px]">
                                        услуги
                                    </p>
                                </TabsTrigger>
                                <TabsTrigger
                                    value="password"
                                    className="data-[state=active]:border-b-2 p-2 ml-2 border-[#A8ABAF] uppercase "
                                >
                                    <p className="uppercase text-[20px]">
                                        технологии
                                    </p>
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="w-max">
                            <TabsContent value="account" className="w-full">
                                <div className="grid grid-rows-3 @[900px]:grid-cols-3  ">
                                    <div className="text-center max-w-[500px] mr-10">
                                        <p className="font-bold text-2xl mt-2 mb-2">
                                            Разработка с нуля под ключ
                                        </p>
                                        <p>
                                            Создадим с нуля по-настоящему
                                            результативное iOS / Android /
                                            Кросс-платформенное приложение,
                                            основываясь на смоем многолетнем
                                            опыте разработки
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
                                            Проанализируем текущее состояние
                                            проекта, предложим пути решения и
                                            доработаем его до нужного результата
                                        </p>
                                        <Button
                                            className="text-[17px]  bg-transparent hover:bg-gray-400"
                                            onClick={OnClick}
                                        >
                                            Заказать
                                        </Button>
                                    </div>
                                    <div className="text-center max-w-[500px] mr-10">
                                        <p className="font-bold text-2xl mt-2 mb-2">
                                            Перенос на кросс-платформу
                                        </p>
                                        <p>
                                            Перенесем ваше iOS / Android
                                            приложение на кросс-платформу и
                                            сократим стоимость разработки и
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
                            <TabsContent className="w-full" value="password">
                                <div className="">
                                    <div className="inline-block mt-2 mr-1 @[2560px]:mr-[300px] @[1250px]:mr-[100px] @[900px]:mr-[20px]">
                                        <Kotlin height={130} />
                                        <p className="text-center">Kotlin</p>
                                    </div>
                                    <div className="inline-block mt-2 mr-1 @[2560px]:mr-[300px] @[1250px]:mr-[100px] @[900px]:mr-[20px]">
                                        <Flutter height={130} />
                                        <p className="text-center">Flutter</p>
                                    </div>
                                    <div className="inline-block mt-2 mr-1 @[2560px]:mr-[300px] @[1250px]:mr-[100px] @[900px]:mr-[20px]">
                                        <Dart height={130} />
                                        <p className="text-center">Dart</p>
                                    </div>
                                    <div className="inline-block mt-2 mr-1 @[2560px]:mr-[300px] @[1250px]:mr-[100px] @[900px]:mr-[20px]">
                                        <Swift height={130} />
                                        <p className="text-center">Swift</p>
                                    </div>
                                    <div className=" @[900px]:inline-block flex justify-center mt-2">
                                        <div>
                                            <Firebase
                                                className=""
                                                height={130}
                                            />
                                            <p className="text-center">
                                                Firebase
                                            </p>
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
