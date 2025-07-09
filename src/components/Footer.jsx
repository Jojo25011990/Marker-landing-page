import { useState } from "react";
import HeadingSecondary from "./HeadingSecondary";

const Footer = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);

	const handleChangeEmailInput = (e) => setEmail(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		const trimEmailValue = email.trim().toLowerCase();
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		const isValidEmail = emailRegex.test(trimEmailValue);

		if (!isValidEmail) setError(true);
		else setError(false);
	};

	return (
		<footer className="w-full min-h-[230px] flex flex-col items-center justify-center mb-24 bg-[url(/images/bg-footer-squiggle.svg)] bg-no-repeat bg-center bg-auto">
			<HeadingSecondary title={"Get notified when we launch"} />

			<form
				noValidate
				autoComplete="off"
				className="w-full max-w-[477px] relative min-h-11.25 flex justify-between gap-5 mt-10"
				onSubmit={handleSubmit}
			>
				<label htmlFor="email" className="sr-only">
					Email Address
				</label>
				<input
					type="email"
					id="email"
					value={email}
					placeholder="Email Address"
					className="w-full max-w-80 text-amber-50 bg-[#093F68] rounded-full pl-5 font-black text-[15px] leading-[140%] outline-0  transition-colors duration-300 border-2 border-transparent focus:border-neutral-50 hover:border-green-primary active:border-green-primary"
					onChange={handleChangeEmailInput}
				/>

				<button
					type="submit"
					className="cursor-pointer px-6 py-3 font-bold text-[15px] leading-[140%] bg-green-primary text-neutral-950 transition-colors duration-300 outline-2 outline-transparent rounded-full hover:bg-transparent active:bg-transparent  hover:text-neutral-50 active:text-neutral-50 hover:outline-green-primary active:outline-green-primary"
				>
					Get notified
				</button>

				{error && (
					<p className="w-full absolute -bottom-5.5 text-red-700 text-sm font-bold pl-5">
						Please check your email.
					</p>
				)}
			</form>
		</footer>
	);
};

export default Footer;
