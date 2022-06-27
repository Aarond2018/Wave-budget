import React from "react";

import styles from "./KnowHow.module.css";

export default function KnowHow() {
	return (
		<section className={`container ${styles.section}`}>
			<h2>How Does Wavebudget Work?</h2>
			<div className={styles.types}>
				<div>
					<h4>
						<span>&bull;</span> The Short Term BNPL
					</h4>
					<p>
						Access Up to N100,000 non-interest credit facility to meet your
						needs and wants. You can purchase daily commodities like food,
						cleaning products, clothes, accessories, etc with this, all you have
						to do is pay a 25% down payment for the item and then pay the
						remaining 75% within 8 weeks. <br /> You can choose to pay every two weeks
						convectively or once at the end of the 8 weeks.
					</p>
				</div>
				<div>
					<h4>
						<span>&bull;</span> The Long Term BNPL
					</h4>
					<p>
						Access up-to N5,000,000 non-interest credit facility to meet your
						needs and wants of luxury or expensive products. With this service,
						you can buy household improvement items, electronics, cars, land, or
						other fixed commodities without emptying your bank account. <br /> To use
						this service, you have to pay a 40% down payment on installment or
						once, and then get the product delivered to you. Once you get the
						product delivered to you, you pay the remaining 60% for up to 5
						months, with no accumulated interest rate.
					</p>
				</div>
			</div>
		</section>
	);
}
