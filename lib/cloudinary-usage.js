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
	transformation: [
		{ fetch_format: "webm", video_codec: "vp9", format: "" },
		{ fetch_format: "mp4", video_codec: "h265", format: "" },
	],
});

console.log(url);
