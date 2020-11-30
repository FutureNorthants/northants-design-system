# 🎨 Nothants Design Sytem

[![Netlify Status](https://api.netlify.com/api/v1/badges/19c44b04-97ec-4066-84f8-fd7106d00996/deploy-status)](https://app.netlify.com/sites/elated-pasteur-e85c66/deploys)

**CURRENTLY IN DEVELOPMENT. MOST THINGS MIGHT NOT WORK**

A new design system for Future Nothants - North Northamptonshire & West Northamptonshire, two brand new unitary councils encompassing Wellingborough, Corby, Daventry, East Northants, Kettering, Northampton, Northamptonshire County and South Northants.

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

Import the components you'd like to use into your app. For example:

```
import React from "react"
import { Button } from "northants-design-system"

const MyComponent = () =>
    <Button label="Button Label" />
```

Each component has documentation in the design system explaining the avaliable props, how to use it, and any guidance on using it.

## 💻 Developing the design system

You need `node` and `npm` installed.

1. Clone the repo and `npm i`
2. `npm run dev` will start up the Storybook playground and start `rollup` watching for changes.

If you want, you can also include this repo in another app as if it were an `npm` package using [`npm link`](https://docs.npmjs.com/cli/link). This is great for developing both side-by-side.

### How to publish a new version to NPM

1. **information about testing needed here**
2. If tests pass...
2. Increment the next version number in the `package.json` file.
3. `npm publish`. This will:
    - Run the tests
    - Bundle and transpile the code
    - Create and publish a tarball to NPM
4. If you are wanting to utilise the updated design system you will then need to update the version number of the design system in the `package.json` file within that repo.

## 🧪 Testing

We use `jest` to run snapshot tests on all components.

**information about testing needed here**

### 🧼 Linting

We use `eslint` and [`jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) to detect potential accessibility issues. Some code editors will automatically pick up problems, and it runs automatically with the `jest` tests, but you can also lint manually with `npm run lint`.

## To-do list

* Add more add-ons to the Storybook playground
* Typescript support?
* Update the `styled-components` dependency to ~5.0.0
