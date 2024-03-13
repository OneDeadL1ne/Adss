import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const FormSchema = z.object({
	name: z.string().min(1, {
		message: "Username must be at least 2 characters.",
	}),
	email: z.string().min(1, {
		message: "Username must be at least 2 characters.",
	}),
	message: z.string().min(1, {
		message: "Username must be at least 2 characters.",
	}),
});

export function ContactsForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		return console.log(data);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Ваше Имя</FormLabel>
							<FormControl>
								<Input placeholder="Иван" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="mail@mail.com" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Сообщение</FormLabel>
							<FormControl>
								<Textarea
									className="resize-none"
									placeholder="Напишите, о чем хотите узнать"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Отправить сообщение</Button>
			</form>
		</Form>
	);
}
