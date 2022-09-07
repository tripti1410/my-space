export function toLocaleString(dateStr) {
	return new Date(Date.parse(dateStr)).toLocaleString("en-IN", {
		dateStyle: "long",
	});
}
