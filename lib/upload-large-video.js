import { v2 as cloudinary } from "cloudinary";

const filePath = process.argv[2];

console.log(`printing env CLOUDINARY_URL=${process.env.CLOUDINARY_URL}`);
console.log(`uploading file ${filePath}`);

const uploadResponse = await cloudinary.uploader.upload(filePath, {
	upload_preset: "eager_large_videos",
	resource_type: "video",
});

console.log(JSON.stringify(uploadResponse, null, 2));
