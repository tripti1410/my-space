import { v2 as cloudinary } from "cloudinary";

export function webmVideo(id) {
	const url = cloudinary.url(id, {
		resource_type: "video",
		secure: true,
		transformation: [{ fetch_format: "webm", video_codec: "vp9", format: "" }],
	});
	return url;
}

export function hevcVideo(id) {
	const url = cloudinary.url(id, {
		resource_type: "video",
		secure: true,
		transformation: [{ fetch_format: "mp4", video_codec: "h265", format: "" }],
	});

	return url;
}

export function mp4Video(id) {
	const url = cloudinary.url(id, {
		resource_type: "video",
		secure: true,
		transformation: [{ fetch_format: "mp4", video_codec: "h264", format: "" }],
	});
	return url;
}

export function thumnail(id) {
	const url = cloudinary.url(id, {
		secure: true,
		transformation: [
			{ quality: "auto", fetch_format: "auto", width: 400, crop: "limit" },
		],
		resource_type: "video",
	});

	return url;
}
