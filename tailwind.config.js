const plugin = require('tailwindcss/plugin')

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addVariant, e }) {

			console.log('PLUGINN', addVariant)

			addVariant('half', function ({ modifySelectors, separator }) {

				console.log('VARIANT')
				modifySelectors(function ({ className }) {
					console.log('SELECTOR')
					return `.${e(`half`)} .${e(`half${separator}${className}`)}`
				})

				console.log('END VARIANT')

			})
			console.log('END PLUGINN')
		}),
	],
	important: true,
}