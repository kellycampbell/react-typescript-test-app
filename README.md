# React Typescript Example

This is a tiny app to experiment with Typescript, React, and Webpack hot loading.

# Tools required:
   - nodejs (4.2.x recommended)
   - npm (3.3.x recommended)
   - tsc - typescript compiler
   - tsd - ts.d package manager
   - nvm - optional

I use nvm to manage node and npm global packages. Example setting up tools:

```
nvm install 4.2
nvm use 4.2
npm install -g npm # upgrades npm to latest
npm install -g tsc tsd
```

# Setup:

Run `make setup`

This will install the dependencies using npm and tsd

# Running dev server:

`make`

This runs a dev server with hot-reloading of code.

# Important config files:

- webpack.config.dev.js - this is the main config for building with webpack for dev
- tsconfig.json - TypeScript compiler options
- .babelrc - Babel translator settings (used for JSX translation and hot loading w/Error overlay)