import { v2 as cloudinary } from "cloudinary";

const filePath = process.argv[2];
console.log(`uploading file ${filePath}`);

const temporaryWebhookUrl = "https://httpdump.io/02is8";

const transformations = [
	{
		fetch_format: "webm",
		video_codec: "vp9",
		// CHECK: https://cloudinary.com/documentation/video_optimization#control_the_quality_of_webm_transcoding
		// setting explicit qmax is a recommendation to prevent excess loss of quality when encoding mp4
		// play around with it on a video by video basis to understand which setting works for which video
		// quality: "70:qmax_90",
		format: "",
	},
	{ fetch_format: "mp4", video_codec: "h265", format: "" },
	{ fetch_format: "mp4", video_codec: "h264", format: "" },
];

const uploadResponse = await cloudinary.uploader.upload(filePath, {
	resource_type: "video",
	eager: transformations,
	use_filename: true,
	unique_filename: true,
	eager_async: true,
	eager_notification_url: temporaryWebhookUrl,
});

const urls = uploadResponse.eager.map((r) => r.secure_url);
console.log(`Public id: ${uploadResponse.public_id}`);
console.log("Video urls");
console.dir(urls);

console.log(JSON.stringify(uploadResponse, null, 2));

// const sampleResponse = {
// 	asset_id: "05dca67fcc22a60c0159f2a0e9662414",
// 	public_id: "lifesci-project",
// 	version: 1662670976,
// 	version_id: "63dab100b687649a3e275643a1e17e19",
// 	signature: "13b4975b4059b91e3ffc8b2619c75c0fe2c64c49",
// 	width: 1920,
// 	height: 1080,
// 	format: "mp4",
// 	resource_type: "video",
// 	created_at: "2022-09-08T21:02:56Z",
// 	tags: [],
// 	pages: 0,
// 	bytes: 62933345,
// 	type: "upload",
// 	etag: "7bf257c28a45ce301dfd72a161ddbb87",
// 	placeholder: false,
// 	url: "http://res.cloudinary.com/dsn7z2gd2/video/upload/v1662670976/lifesci-project.mp4",
// 	secure_url:
// 		"https://res.cloudinary.com/dsn7z2gd2/video/upload/v1662670976/lifesci-project.mp4",
// 	folder: "",
// 	access_mode: "public",
// 	audio: {},
// 	video: {
// 		pix_format: "yuv420p",
// 		codec: "h264",
// 		level: 40,
// 		profile: "High",
// 		bit_rate: "12328226",
// 		dar: "16:9",
// 		time_base: "1/24000",
// 	},
// 	frame_rate: 23.976023976023978,
// 	bit_rate: 12367962,
// 	duration: 40.707333,
// 	rotation: 0,
// 	original_filename: "lifesci-project",
// 	eager: [
// 		{
// 			status: "processing",
// 			batch_id:
// 				"b55cbb5f493e23292da2545910dcff64087419cfa78e856e270f346d089c7031",
// 			url: "http://res.cloudinary.com/dsn7z2gd2/video/upload/f_webm,vc_vp9/v1662670976/lifesci-project",
// 			secure_url:
// 				"https://res.cloudinary.com/dsn7z2gd2/video/upload/f_webm,vc_vp9/v1662670976/lifesci-project",
// 		},
// 		{
// 			status: "processing",
// 			batch_id:
// 				"b55cbb5f493e23292da2545910dcff64087419cfa78e856e270f346d089c7031",
// 			url: "http://res.cloudinary.com/dsn7z2gd2/video/upload/f_mp4,vc_h265/v1662670976/lifesci-project",
// 			secure_url:
// 				"https://res.cloudinary.com/dsn7z2gd2/video/upload/f_mp4,vc_h265/v1662670976/lifesci-project",
// 		},
// 		{
// 			status: "processing",
// 			batch_id:
// 				"b55cbb5f493e23292da2545910dcff64087419cfa78e856e270f346d089c7031",
// 			url: "http://res.cloudinary.com/dsn7z2gd2/video/upload/f_mp4,vc_h264/v1662670976/lifesci-project",
// 			secure_url:
// 				"https://res.cloudinary.com/dsn7z2gd2/video/upload/f_mp4,vc_h264/v1662670976/lifesci-project",
// 		},
// 	],
// 	nb_frames: 976,
// 	api_key: "664126378384351",
// };

// const urls = sampleResponse.eager.map((r) => r.secure_url);
// console.dir(urls, { depth: 5 });
