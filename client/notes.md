> # **Food – App – Native:**

Start with installing expo template:

`npx create-expo-app client`

---

start the project by goinh to vclient

`npx expo start`

To install taiwind css ->

`npm i nativewind `

`npm i --dev tailwindcss`

This will install tailwind in react native.

usually its given in yarn add \_\_\_ but we can use npm i also.

Now we need to add `tailwind.config.js` file for that we need to add,

`npx tailwindcss init`

For the tailwind css to work please make sure to add this file along with u need to make changes in both babel config and tailwind config.

One you do that you should restart the project so that the project will get the changes.

Remember for me tailwind did not worked. downgrade it to 3.3.2.

steps i followed >

```
yarn remove nativewind
yarn remove tailwindcss
yarn add postcss@8.4.23
yarn add --dev tailwindcss@3.3.2
yarn add nativewind
```

do this, better install yarn instead of npm.

---

# _Now lets start with Navigation:_

install react navigation by adding `npm install @react-navigation/native`

need to install expo dependancy for react navigation:
`npx expo install react-native-screens react-native-safe-area-context`

alsi install native stack:

`npm install @react-navigation/native-stack`

It is because when we serach an ural /:id its pushed on to browser history, when we go back its getting popped.
