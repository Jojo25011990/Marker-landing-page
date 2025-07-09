import HeadingSecondary from "./HeadingSecondary";
import PricingCard from "./PricingCard";

const SectionPricing = () => {
	return (
		<section className="px-[220px] mb-40">
			<div className="w-full max-w-[540px] mx-auto text-center">
				<HeadingSecondary title={"Our pricing plans"} />
				<p className="mb-28 mt-6 text-[#777F98] font-medium leading-[160%]">
					We only make money when our creators make money. Our plans
					are always affordable, and it's completely free to get
					started.
				</p>
			</div>

			<ul className="flex gap-[30px] items-center pricing-media-820px">
				<PricingCard
					svgImg={"./images/icon-free.svg"}
					title={"Dip your toe"}
					description={
						"Just getting started? No problem at all! Our free plan will take you a long way."
					}
					price={"Free"}
					features={[
						"Unlimited products",
						"Basic analytics",
						"Limited marketplace exposure",
						"10% fee per transaction",
					]}
				/>
				<PricingCard
					svgImg={"./images/icon-paid.svg"}
					title={"Dive right in"}
					description={
						"Ready for the big time? Our paid plan will help you take your business to the next level."
					}
					price={"$25.00"}
					priceMonth={"/ month"}
					features={[
						"Custom domain",
						"Advanced analytics and reports",
						"High marketplace visibility",
						"5% fee per transaction",
					]}
				/>
			</ul>
		</section>
	);
};

export default SectionPricing;
