import React from "react";
const Header = () => {
	return (
		<header>
			<h1 className="logo">Trapti Rahangdale</h1>
			<nav className="navigation"><ul className="menu"><li className="menu-item">About</li><li className="menu-item">Writing</li></ul></nav>
		</header>
	)
}

const Footer = () => {
	return (
		<footer>
			<p>All rights reserved</p>
		</footer>
	)
}

const Home = () => {
	const blogs = ['Blog 1', 'Blog 2', 'Blog 3']
	return (
		<div className="wrapper">
			<Header />
			<main>
				<section class="home-about-container">
					<div class="image-container">
						<img src="" />
					</div>
					<p class="content">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</section>
				<section>
					<h2>Writing</h2>
					<ul>
						{blogs.map(blog => <li>
							<h3>{blog}</h3>
						</li>)}
					</ul>
				</section>
			</main>
			<Footer />
		</div>
	)
}
export default Home;
