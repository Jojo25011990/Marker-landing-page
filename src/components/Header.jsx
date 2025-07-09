const Header = () => {
	return (
		<header className="py-20">
			<img src="./images/logo.svg" alt="Logo Marker" className="pl-40" />

			<div className="relative w-full min-h-[445px] flex flex-col gap-20 justify-center items-center mt-30">
				<div className="absolute -left-15  w-[400px] h-[459px] bg-[url(/images/illustration-hero-left.svg)] bg-no-repeat"></div>

				<div className=" w-[820px] h-[459px] bg-[url(/images/illustration-hero-mobile.png)] bg-no-repeat mobile-header-bg"></div>

				<div className="relative z-30 w-full max-w-[730px] text-center px-25  bg-[url(/images/bg-hero-squiggle.svg)] bg-no-repeat bg-center bg-contain header-content-block">
					<h1 className="font-black text-5xl leading-[120%]">
						Get paid for the work you{" "}
						<span className="text-green-primary">love</span> to do.
					</h1>
					<p className="mt-6 mb-16 text-[#777F98] font-medium leading-[160%] text-[15px]">
						The 9-5 grind is so last century. We believe in living
						life on your own terms. Whether you're looking to escape
						the rat race or set up a side hustle, we've got you
						covered.
					</p>

					<div>
						<img
							src="./images/icon-scroll.svg"
							alt="Green Icon Scroll SVG ( computer mouse )"
							className="inline-block"
						/>
					</div>
				</div>

				<div className="absolute -right-15  w-[400px] h-[459px] bg-[url(/images/illustration-hero-right.svg)] bg-no-repeat"></div>
			</div>
		</header>
	);
};

export default Header;
