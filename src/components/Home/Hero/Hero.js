import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../../Assets/hero-image.png";
import Button from "../../Button/Button";

export default function Hero() {
	return (
		<section className={`container ${styles.hero}`}>
			<div className={styles.hero__content}>
				<h1>
					Buy now, <span>Pay later..</span>
				</h1>
				<p>
					In 4 months with 0% interest. <br />
					Grow and manage your finances, to meet your needs and wants always.
					Join the <span>Wavebudget</span> community now!
				</p>
				<div className={styles.links}>
					<Button invert={true} link="/#info">
						<span>Learn more</span>
					</Button>
					<Button link="/#form">
						<span>Sign up now</span>
					</Button>
				</div>
			</div>
			<div className={styles.hero__image}>
				<img src={heroImage} alt="hero-image" />
			</div>
		</section>
	);
}
