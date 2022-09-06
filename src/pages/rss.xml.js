import rss from "@astrojs/rss";
import * as blog from "$src/js/posts.js";

const allPosts = Object.values(
	import.meta.glob("../content/posts/*.md", { eager: true })
);
const posts = blog.sortedPosts(allPosts);

export const get = () =>
	rss({
		title: "Trapti Rahangdale's blog",
		site: import.meta.env.SITE,
		description: "My experiences",
		items: posts.map((item) => ({
			title: item.frontmatter.title,
			description: item.description,
			link: item.frontmatter.path,
			pubDate: item.frontmatter.date,
		})),
		// (optional) inject custom xml
		customData: `<language>en-us</language>`,
	});
