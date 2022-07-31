/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"accent-primary-1" : "var(--accent-primary-1)",
				"accent-primary-2" : "var(--accent-primary-2)",
				"accent-primary-3" : "var(--accent-primary-3)",
				"accent-primary-4" : "var(--accent-primary-4)",
				"accent-secondary-1" : "var(--accent-secondary-1)",
				"accent-secondary-2" : "var(--accent-secondary-2)",
				"accent-secondary-3" : "var(--accent-secondary-3)",
				"text-1" : "var(--text-1)",
				"background-1" : "var(--background-1)",
			},
		},
	},
	plugins: [],
};