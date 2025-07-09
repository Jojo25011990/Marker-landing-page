const SectionFeatures = () => {
	const dataList = [
		{
			id: 1,
			name: "Indulge your passions",
			text: "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
			img: "./images/illustration-passions.svg",
		},

		{
			id: 2,
			name: "Gain financial freedom",
			text: "Start making money work for you. There's nothing quite like earning while you sleep.",
			img: "./images/illustration-financial-freedom.svg",
		},

		{
			id: 3,
			name: "Choose your lifestyle",
			text: "Own your daily schedule. Fancy a lie-ing? Go for it! Take charge of your week.",
			img: "./images/illustration-lifestyle.svg",
		},

		{
			id: 4,
			name: "Work from anywhere",
			text: "Selling online means not being pinned down. Want to work AND travel? Go for it!",
			img: "./images/illustration-financial-freedom.svg",
		},
	];

	return (
		<section className="flex justify-center p-40">
			<ul className="w-full max-w-[1116px] flex gap-8 min-h-96 features-media-1250px features-media-980px features-media-820px">
				{dataList.map((dataItem) => (
					<li
						className={
							dataItem.id % 2 === 0 ? "self-end" : "self-start"
						}
						key={dataItem.id}
					>
						<div className="w-[160px] h-[160px] flex justify-center items-center mb-12 bg-[#093F68] rounded-[48px]">
							<img src={dataItem.img} alt={dataItem.name} />
						</div>

						<h3 className="font-black text-lg leading-[140%] mb-6">
							{dataItem.name}
						</h3>
						<p className="text-[#777f98] font-medium text-[15px] leading-[160%]">
							{dataItem.text}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default SectionFeatures;
