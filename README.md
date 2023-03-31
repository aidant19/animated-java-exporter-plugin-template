# Animated Java Exporter Blockbench Plugin Template
Includes everything you need to get started making your own Animated Java Exporter!

This template is based on my [Blockbench Plugin Template](https://github.com/SnaveSutit/blockbench-plugin-template)

## Setup
- Create a new repo using this template
- Run `yarn` to initialize the development enviornment
- Configure the package.json to use your information
- Configure the plugin definition in `index.ts`
- Rename the global variable in `global.d.ts` to match your plugin's name
- Rename the exporter in `exporter.ts`
- Rename the translation keys in `lang.ts` to match your exporter's name

## Build commands
- `yarn build:dev` - Builds in dev mode and watches for file changes
- `yarn build:prod` - Builds a production version of the plugin and exits
- `yarn format` - Formats all of the source files using Prettier
