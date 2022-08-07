/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"accent-primary-1" : "#FFCC33",
				"accent-primary-2" : "#F3D643",
				"accent-primary-3" : "#FFAE42",
				"accent-primary-4" : "#C36721",
				"accent-secondary-1" : "#29B2A0",
				"accent-secondary-2" : "#046E94",
				"accent-secondary-3" : "#073376",
				"text-1" : "#000",
				"text-1-dark" : "#f9fafa",
				"background-1" : "#ffe186",
				"background-1-dark" : "#1c172c"
			},

			fontFamily: {
				title: ["Italianno", "cursive"]
			},
		},
	},
	plugins: [],
};