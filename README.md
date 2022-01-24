# Getting started

Start in your command line the css compile watch as described below and start your live reload server. For example the Live Server extention for VSCode.
[Live Server extention Link](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

## Css compiler
`npx tailwindcss -i ./src/main.css -o ./dist/main.css --watch`

## Production
`npx tailwindcss -o ./dist/main.css --minify`