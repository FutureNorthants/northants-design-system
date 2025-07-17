# 🎨 Northants Design Sytem

👉 **[You can view the design system here](https://design-system.westnorthants.gov.uk)**

The design system for North Northamptonshire & West Northamptonshire, two brand new unitary councils encompassing Wellingborough, Corby, Daventry, East Northants, Kettering, Northampton, Northamptonshire County and South Northants.

## Requirements

Requires node v18 for Storybook v7. If you have nvm installed then you can run `nvm use` and it will autodetect the correct version of node to use.

## Installation

### Installation and development of the Design System

You need `node` and `npm` installed.

1. Clone the repo and `npm i`
2. `npm run dev` will start up the Storybook playground and start `rollup` watching for changes.

### Installation using docker

This option is recommended if your using a windows machine

```sh
// build with no cache
docker-compose build --no-cache

// start the services
docker-compose up

// list the services
docker-compose ps

// list the containers
docker ps

// stop services
docker-compose stop
```

## Documentation

This design system is made up from a combination of these libraries:

- [Rollup](https://github.com/rollup/rollup)
- [Storybook](https://storybook.js.org/) to help you create and show off your components
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components

## Examples

👉 **[You can view the design system here](https://northants-design-system.netlify.app)**

This is a living documentation powered by [Storybook](https://storybook.js.org/), where you can see all the available components, their variations and documentation.

### Using the design system in your project

You can find the design system [here on NPM](https://www.npmjs.com/package/northants-design-system).

```
npm install northants-design-system

// Install peer dependencies
npm install react react-dom styled-components @reach/router
```

This design system uses theming - **it will not work without a theme wrapped around the components** - to use a theme you will need to include a `ThemeProvider` from styled components, [you can find out more about how this works here](https://styled-components.com/docs/advanced#theming). Then you will need to import one of the three themes from the design system, or create your own. The three avaliable are `GDS_theme` (a basic style based on the [GDS design system](https://design-system.service.gov.uk/)), `west_theme` and `north_theme` (themes for North and West Northamptonshire styled components).

This `ThemeProvider` can be wrapped around the entire app, or around a single component

```
import { ThemeProvider } from 'styled-components';
import { GDS_theme } from "northants-design-system";

```

Import the components you'd like to use into your app. For example:

```
import React from "react"
import { Button } from "northants-design-system"

const MyComponent = () =>
    <Button text="Button Label" />
```

Each component has documentation in the design system explaining the avaliable props, how to use it, and any guidance on using it.

We are also using a [CSS reset](http://meyerweb.com/eric/tools/css/reset/) which you should add to your frontend when using this design system, to ensure the styles are correct.

### Putting it all together

```
import React from "react"
import { Button } from "northants-design-system"
import { ThemeProvider } from 'styled-components';
import { GDS_theme } from "northants-design-system";

const MyComponent = () =>
  <ThemeProvider theme={GDS_theme}>
    <Button text="Button Label" />
  </ThemeProvider>
```

## Documentation

### Creating and generating new components

There is a util file under `util` called `create-component.js`. Instead of copy pasting components to create a new component, you can just run this command to generate all the files you need to start building out a new component. To use it:

```
npm run generate NewComponentName [<<ComponentType>>]
```

This will generate:

```
/src/library/components/
  /NewComponentName
    NewComponentName.tsx
    NewComponentName.stories.tsx
    NewComponentName.test.tsx
    NewComponentName.types.ts
    NewComponentName.styles.ts
```

```
/src/library/<<ComponentType>>/
  /NewComponentName
    NewComponentName.tsx
    NewComponentName.stories.tsx
    NewComponentName.test.tsx
    NewComponentName.types.ts
    NewComponentName.styles.ts
```

The default templates for each file can be modified under `util/templates`.

Don't forget to add the component to your `index.ts` exports if you want the library to export the component.

### How to publish a new version to NPM

First, make sure you have an NPM account and are [logged into NPM using the `npm login` command.](https://docs.npmjs.com/creating-a-new-npm-user-account)

1. **information about testing needed here**
2. If tests pass...
3. Increment the next version number in the `package.json` file.
4. `npm publish`. This will:
   - Run the tests
   - Bundle and transpile the code
   - Create and publish a tarball to NPM
5. If you are wanting to utilise the updated design system you will then need to update the version number of the design system in the `package.json` file within that repo.

### Installing component library locally for IE11 (or other uses) but this is easier and less buggy

https://www.viget.com/articles/how-to-use-local-unpublished-node-packages-as-project-dependencies/

Good article on this can be found [here](https://www.viget.com/articles/how-to-use-local-unpublished-node-packages-as-project-dependencies/)

Install yalc **globally**  
Using NPM: `npm i yalc -g`  
Using Yarn: `yarn global add yalc`

In the **northants-design-system**  
You will need node v14.17.3 > to build on windows

run `yalc publish`

In **your other repository**  
run `yalc add northants-design-system` then run `npm install` or `yarn`

Then run `npm run start` to run the application.

You will need node v14.17.3 > to build on windows

Install yalc
Using NPM:

`npm i yalc -g`

Using Yarn:

`yarn global add yalc`

run `yalc publish` in the design system folder

run `yalc add northants-design-system` in ie11-test-folder

`npm install`

to make changes and update them

in design system `yalc push` (this automatically updates all dependencies on all yalc files)

or `yalc publish` in design system and `yalc update` in your projects repo

### Installing Component Library Locally

Let's say you have another project (`test-app`) on your machine that you want to try installing the component library into without having to first publish the component library. In the `test-app` directory, you can run:

```
npm i --save ../react-component-library
```

which will install the local component library as a dependency in `test-app`. It'll then appear as a dependency in `package.json` like:

```JSON
  ...
  "dependencies": {
    ...
    "react-component-library": "file:../react-component-library",
    ...
  },
  ...
```

Your components can then be imported and used in that project.
