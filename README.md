# 🎨 Nothants Design Sytem

[![Netlify Status](https://api.netlify.com/api/v1/badges/19c44b04-97ec-4066-84f8-fd7106d00996/deploy-status)](https://app.netlify.com/sites/elated-pasteur-e85c66/deploys)

**CURRENTLY IN DEVELOPMENT. MOST THINGS MIGHT NOT WORK**

A new design system for Future Nothants - North Northamptonshire & West Northamptonshire, two brand new unitary councils encompassing Wellingborough, Corby, Daventry, East Northants, Kettering, Northampton, Northamptonshire County and South Northants.

This design system is made up from a combination of these libraries:

- [Rollup](https://github.com/rollup/rollup)
- [Storybook](https://storybook.js.org/) to help you create and show off your components
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components

## Demo and docs

👉 **[You can view the design system here](https://northants-design-system.netlify.app)**

This is a living documentation powered by [Storybook](https://storybook.js.org/), where you can see all the available components, their variations and documentation.

## Using the design system

You can find the design system [on NPM here](https://www.npmjs.com/package/northants-design-system).

```
npm install northants-design-system

// Install peer dependencies
npm install react react-dom styled-components @reach/router
```

This design system uses theming - **it will not work without a theme wrapped around the components** - to use a theme you will need to include a `ThemeProvider` from styled components, [you can find out more about how this works here](https://styled-components.com/docs/advanced#theming). Then you will need to import one of the three themes from the design system, or create your own. The three avaliable are `GDS_theme` (a basic style based on the [GDS design system](https://design-system.service.gov.uk/)), `west_theme` and `north_theme` (themes for North and West Northamptonshire styled components). 

This ThemeProvider can be wrapped around the entire app, or around a single component

```
import { ThemeProvider } from 'styled-components';
import { GDS_theme } from "northants-design-system";

```

Import the components you'd like to use into your app. For example:

```
import React from "react"
import { Button } from "northants-design-system"

const MyComponent = () =>
    <Button label="Button Label" />
```

Each component has documentation in the design system explaining the avaliable props, how to use it, and any guidance on using it.

### Putting it all together

```
import React from "react"
import { Button } from "northants-design-system"
import { ThemeProvider } from 'styled-components';
import { GDS_theme } from "northants-design-system";

const MyComponent = () =>
  <ThemeProvider theme={GDS_theme}>
    <Button label="Button Label" />
  </ThemeProvider>
```

## 💻 Developing the design system

You need `node` and `npm` installed.

1. Clone the repo and `npm i`
2. `npm run dev` will start up the Storybook playground and start `rollup` watching for changes.

If you want, you can also include this repo in another app as if it were an `npm` package using [`npm link`](https://docs.npmjs.com/cli/link). This is great for developing both side-by-side.


### Creating and generating new components

There is a util file under `util` called `create-component.js`. Instead of copy pasting components to create a new component, you can just run this command to generate all the files you need to start building out a new component. To use it:

```
npm run generate NewComponentName
```

This will generate:

```
/src
  /NewComponentName
    NewComponentName.tsx
    NewComponentName.stories.tsx
    NewComponentName.test.tsx
    NewComponentName.types.ts
    NewComponentName.styles.ts
```

The default templates for each file can be modified under `util/templates`.

Don't forget to add the component to your `index.ts` exports if you want the library to export the component.

### 🧪 Testing

```
npm run test
```

### 🧱 Building

```
npm run build
```

### 🧼 Linting

We use `eslint` and [`jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) to detect potential accessibility issues. Some code editors will automatically pick up problems, and it runs automatically with the `jest` tests, but you can also lint manually with `npm run lint`.


### How to publish a new version to NPM
First, make sure you have an NPM account and are [logged into NPM using the `npm login` command.](https://docs.npmjs.com/creating-a-new-npm-user-account)

1. **information about testing needed here**
2. If tests pass...
2. Increment the next version number in the `package.json` file.
3. `npm publish`. This will:
    - Run the tests
    - Bundle and transpile the code
    - Create and publish a tarball to NPM
4. If you are wanting to utilise the updated design system you will then need to update the version number of the design system in the `package.json` file within that repo.

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

### Usage

Let's say you created a public NPM package called `example-component-library` with the `TestComponent` component created in this repository.

Usage of the component (after the library installed as a dependency into another project) will be:

```TSX
import React from "react";
import { TestComponent } from "example-component-library";

const App = () => (
  <div className="app-container">
    <h1>Hello I'm consuming the component library</h1>
    <TestComponent theme="primary" />
  </div>
);

export default App;
```

## To-do list

* Add more add-ons to the Storybook playground
* Tidy storybook theming
