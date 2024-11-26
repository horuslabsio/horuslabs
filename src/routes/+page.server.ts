import { browser } from "$app/environment";

export function load({ cookies }) {
	const theme = cookies.get("theme");

	return {
		theme
	};
}
