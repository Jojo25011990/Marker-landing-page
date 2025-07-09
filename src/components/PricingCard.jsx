const PricingCard = ({
	svgImg,
	title,
	description,
	features = [],
	price,
	priceMonth = "",
}) => {
	return (
		<div
			className={`relative h-fit px-8 rounded-lg ${
				title === "Dip your toe"
					? "bg-[#093F68] text-neutral-50 py-12 "
					: "bg-green-primary text-neutral-950 py-16 "
			}`}
		>
			<div
				className={`absolute ${
					title === "Dip your toe" ? "-top-7" : "-top-8"
				}`}
			>
				<img src={svgImg} alt={price} />
			</div>

			<h4 className="font-black text-lg leading-[140%] mb-5">{title}</h4>

			<p className="font-medium text-[15px] leading-[160%] mb-6">
				{description}
			</p>

			<span className="flex items-center gap-2 mb-6">
				<strong className="font-black text-[40px] leading-[140%]">
					{price}
				</strong>{" "}
				<span className={priceMonth === "" ? "hidden" : null}>
					{priceMonth}
				</span>
			</span>

			<ul className="flex flex-col gap-3 mt-4">
				{features.map((feature, index) => (
					<li className="flex items-start gap-2" key={index}>
						<img
							src={`${
								title === "Dip your toe"
									? "./images/icon-check-02.png"
									: "./images/icon-check-01.png"
							}`}
							alt="Checkmark"
							className="w-4 h-4 mt-1"
						/>
						<span className="font-medium text-[15px] leading-[160%]">
							{feature}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PricingCard;
