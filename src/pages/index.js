import React from "react";
import profile from "../images/profile.svg";
import Header from "./layout-components/header";
import Footer from "./layout-components/footer";
import SocialLinks from "./components/social-links";

// TODO:: Move this separet file
const BLOGS = [
	{
		id: 302,
		slug: "https://medium.com/statuscode/thinking-in-css-grid-48922b25ee69",
		title: "Thinking in CSS Grid",
		subtitle: "Two dimensional and outside-in. What does it mean ?",
		publication: "Statuscode"
	},
	{
		id: 499,
		slug: "https://medium.com/@r_tripti/css-grids-all-about-fr-units-36b7b5fea661",
		title: "CSS Grids — All about fr units",
		subtitle: "In this article I am going to answer below questions about fr units:"
	},
	{
		id: 288,
		slug: "https://medium.com/@r_tripti/handling-css-at-scale-b74a63c84abb",
		title: "Handling CSS at scale",
		subtitle: "Which CSS technique to use — Styled Components, CSS Modules, Component stylesheets, Single stylesheets.",
	},
	{
		id: 197,
		slug: "https://medium.com/@r_tripti/a-7-nights-8-days-trip-to-tawang-arunachal-pradesh-northeast-india-274926aa9cae",
		title: "A 7 Nights 8 Days trip to Tawang (Arunachal Pradesh) Northeast India",
		subtitle: "Visited the Himalayas in Arunachal Pradesh. Pictures and words are very less to express the feeling which you get in Himalayas."
	}
]
const Home = () => {
	return (
		<div className="wrapper">
			<Header />
			<main>
				<section className="home-about-container">
					<figure className="image-container">
						<img src={profile} alt="Trapti rahangdale" />
					</figure>
					<p className="content">
						<strong className="highlight">Frontend Engineer </strong>
						{/* |CSS aficionado| CSS Grids|Writer|Learning software and life lessons |Riding the waves with Amith George */}
					</p>
					<p className="content">
						Analyzes designs with product mindset and converts them into attractive, interactive websites. Collaborates with designers, backend developers, and managers to achieve the shared vision together.
					</p>
					<p className="content">Worked on variety of websites and SaaS web apps considering key elements of web development SEO, Performance, and Maintainability. Enjoys learning new technologies, and blogging about them on Medium or here.</p>
					<p className="content">
						Core skills are <strong className="highlight">HTML CSS & JAVASCRIPT.</strong>
					</p>
					<p className="content">Currently focusing on learning <strong className="highlight">web animations, SVG's and accessibility</strong>.</p>

				</section>
				<section className="home-writing-container">
					<h2 className="section-title">Writing on Medium</h2>
					<ul className="medium-blogs">
						{BLOGS.map((blog) => <li className="medium-blog" key={blog.id}>
							<a href={blog.slug} target="_blank" >
								<h3 className="medium-blog__title">{blog.title}</h3>
								<p className="medium-blog__subtitle">{blog.subtitle}</p> </a>
						</li>)}
					</ul>
				</section>
				<SocialLinks />
			</main>
			<Footer />
		</div>
	)
}
export default Home;
