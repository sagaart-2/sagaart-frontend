# Sagaart • frontend

## How to start

- clone repository
- clean install packages: `npm ci`
- init husky: `npx husky init`
- optionally add these extensions for the IDE: `eslint`, `stylelint`, `prettier`, `conventional-commits` (the last one is highly recommended)
- create a new branch like: `feat/new-feature`
- run turbopack: `npm run dev`
- code 🥷
- commit your code using: `npm run commit` (it'll run Commitizen)
- be sure that hook with linting and formatting is running during commit
- push your branch to GitHub
- go to GitHub and open pull request from your branch to `develop` and request review
- take coffee, you are awesome ✨

## Git

### Branches

#### Template

`[prefix]: [task]`

#### Prefix options:

- **feat**
- **fix**
- **refactor**
- **build**
- **docs**
- **chore**

#### Examples

- `feat: ✨ project-structure`
- `refactor: default-button`

### Commits

```bash
## Use conventional commits. Either with preinstalled commitizen:
npm run commit

## Or with VSCode extension "conventioanl-commits"
```

Each commit shoud start with precommit script arranged by Husky. Precommit script works with staged files and includes: `eslint`, `stylelint`, `prettier` running with --fix flag.

### Pull-requests (PR) and merging

- PR name should be infomative, but short
- All feature, refactor and fix PR's should be opened to the branch `develop`
- Code author should him/herself: **open PR**, **resolve conflicts**, **request review**, **merge PR** after passing review and **delete remote branch** after merge (if it is not deleted automatically)

## Files and directories naming

`kebab-case`, for example: `default-button`, `user`, `index.ts`

Be cautious with letters case.

## Components export

Reexport components from the upper level folders. Inside components use named exports and avoid using default export.

## FSD Structure (reduced)

> ⚠️ **Attention**
>
> According to FSD, code can be used in the same layer components or upper.

```
src
├── app // app layer
│   ├── (routes) // routes for Next.js App-router
│   │   ├── route-1
│   │   │   └── page.tsx // page code here
│   │   ├── route-2
│   │   ├── ...
│   │   ├── layout.tsx // root layout
│   │   └── page.tsx // root route
│   └── providers
│
├── widgets // reusable components
│   ├── widget-1
│   │   ├── index.tsx // logic of the component
│   │   ├── ui
│   │   │   ├── index.tsx // widget's ui
│   │   │   ├── component-1-ui.tsx // ui component — part of the widget ui
│   │   │   └── ...
│   │   └── lib // helper functions
│   ├── widget-2
│   └── ...
│
├── shared // bottom level
│   ├── style // global styles, theme, vars
│   │   └── ...
│   ├── api // api calls, types, dto
│   │   ├── index.ts
│   │   └── ...
│   ├── ui // ui kit of the app
│   │   ├── index.ts
│   │   └── ...
│   └── ...
│
└── ...

```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Docs for other used libs are here for you:

- [Mantine Documentation](https://mantine.dev/getting-started/)
- [FSD Documentation](https://feature-sliced.design/ru/docs)
- [FSD telegram](https://t.me/feature_sliced) - here is convinient ai bot, which answers questions according to methodology
-
