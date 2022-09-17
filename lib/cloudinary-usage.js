import { v2 as cloudinary } from "cloudinary";

const videoTag = cloudinary.video("lifesci-project", {
	poster: false,
	transformation: [
		{ fetch_format: "webm", video_codec: "vp9", format: "" },
		{ fetch_format: "mp4", video_codec: "h265", format: "" },
		{ fetch_format: "mp4", video_codec: "h264", format: "" },
	],
});
console.log(videoTag);

const url = cloudinary.url("lifesci-project", {
	secure: true,
	resource_type: "video",
	transformation: [{ fetch_format: "webm", video_codec: "vp9", format: "" }],
});

console.log(url);

const posterUrl = cloudinary.url("lifesci-project.jpg", {
	secure: true,
	resource_type: "video",
});

console.log(posterUrl);

const optimizedPosterUrl = cloudinary.url(`lifesci-project`, {
	secure: true,
	transformation: [
		{ quality: "auto", fetch_format: "auto", width: 400, crop: "limit" },
	],
	resource_type: "video",
});

console.log(optimizedPosterUrl);
