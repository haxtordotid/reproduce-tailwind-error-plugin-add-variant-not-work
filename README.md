# reproduce-tailwind-plugin-addVariant-error

## Run

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Issue
addVariant not work, in my case it has once working and i continue on my project
but suddenly the code dosn't work , i'm sure im not changing any config

You can see the console.log appear when entering plugin, but when calling addVariant it dosn't execute

## Expectation
create variant called half
so when the half class active
any child with half: prefix will be affected

in pages/index.vue half:text-green-500 should make the text green

## Environment
- Ubuntu 18.04
- node v14.13.0
- npm v7.10.0
- Nuxt v2.15.3
- Tailwind v2.0.4

## Dependcies
```
"dependencies": {
    "@nuxtjs/axios": "^5.13.1",
    "@nuxtjs/pwa": "^3.3.5",
    "core-js": "^3.9.1",
    "nuxt": "^2.15.3"
},
"devDependencies": {
	"@nuxt/types": "^2.15.3",
	"@nuxt/typescript-build": "^2.1.0",
	"@nuxtjs/eslint-config-typescript": "^6.0.0",
	"@nuxtjs/eslint-module": "^3.0.2",
	"@nuxtjs/tailwindcss": "^4.0.3",
	"@vue/test-utils": "^1.1.3",
	"babel-core": "7.0.0-bridge.0",
	"babel-eslint": "^10.1.0",
	"babel-jest": "^26.6.3",
	"eslint": "^7.22.0",
	"eslint-config-prettier": "^8.1.0",
	"eslint-plugin-nuxt": "^2.0.0",
	"eslint-plugin-prettier": "^3.3.1",
	"eslint-plugin-vue": "^7.7.0",
	"jest": "^26.6.3",
	"postcss": "^8.2.10",
	"prettier": "^2.2.1",
	"ts-jest": "^26.5.4",
	"vue-jest": "^3.0.4"
}
```
"@nuxtjs/tailwindcss": "^4.0.3" Use Tailwind v2.0.4