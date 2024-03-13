import { ContactsForm } from "./ContactsForm";

export default function Сontacts() {
	return (
		<div className="@container">
			<div className="flex  text-white ml-[50px] mr-[50px] mt-[40px] @[800px]:ml-[100px] @[800px]:mr-[100px] @[800px]:mt-0">
				<div className="">
					<p className="font-bold text-nowrap text-[60px]">Оставьте заявку!</p>
					<p className="text-wrap">
						Заполните форму, расскажите о вашей компании и проекте, и мы с вами
						свяжемся.
					</p>
					<div>
						<div className="flex items-start justify-start gap-3">
							<p>Email: </p>
							<p>adsscode@yandex.ru</p>
						</div>
						<div className="flex items-start justify-start gap-3">
							<p>Телефон: </p>
							<p>+7(901)350-77-86</p>
						</div>
						<div className="flex items-start justify-start gap-3">
							<p>Telegram: </p>
							<a
								href="https://t.me/AdSSCode"
								className="underline underline-offset-1"
							>
								@AdSSCode
							</a>
						</div>
					</div>
				</div>
				<div className="">
					<ContactsForm />
				</div>
			</div>
		</div>
	);
}
