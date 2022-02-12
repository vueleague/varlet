# @varlet/cli

The out-of-the-box `Vue3 component library` rapid prototyping tool provides a series of commands and tools to solve the problem of component library development

### Feature

- 1.Out-of-the-box component library development environment
- 2.Out-of-the-box component library compilation tool, support exporting `esm` and `umd` two module codes
- 3.Component library document site based on configuration files, support Baidu statistics and theme customization
- 4.Supports `single file component (sfc)` and `tsx, jsx` two styles of component library writing styles
- 5.Code inspection tool out of the box
- 6.Unit testing tools out of the box
- 7.Out-of-the-box code publishing tool, publish to npm and github, and automatically generate a change log
- 8.Support `Typescript`
- 9.Support `Dark Mode`
- 10.Based on `pnpm`

### Quickstart

`@varlet/cli` has built-in `single file component (sfc)` and `tsx, jsx` two styles of component library project templates, which can be directly generated by the `gen` command.
To help users directly enter the development of the component itself, it is recommended to use `pnpm` as a package management tool.

```shell
# Install command line tools
pnpm add @varlet/cli -g
# Use the gen command to generate the project
varlet-cli gen projectName
cd projectName
pnpm install
pnpm dev
```

Then by simply modifying some basic information of the component library template,
you can start the development of the component library

## Advanced customization

### Configuration file

The `varlet.config.js` in the project root directory is used to manage the specific details of the entire component library project

| Parameter | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `host` | Development server host | _number_ | `localhost` |
| `port` | Development server port | _number_ | `8080` |
| `name` | Full name of the component library	| _string_ | `Varlet` |
| `namespace` | Component library namespace, Will be used as a component prefix | _string_ | `var` |
| `title` | The title of the component library in the document | _string_ | `VARLET` |
| `logo` | The logo of the component library in the document | _string_ | `-` |
| `defaultLanguage` | Document default language | _string_ | `zh-CN` |
| `useMobile` | Whether to display the right mobile phone preview | _boolean_ | `false` |
| `themes` | Document themes | _SiteThemes_ | `-` |
| `darkThemes` | Document dark mode themes | _SiteThemes_ | `-` |
| `highlight` | Document code snippet style related | _SiteHighlight_ | `-` |
| `analysis` | Document statistics related | _SiteAnalysis_ | `-` |
| `pc` | PC-side document structure configuration | _SitePC_ | `-` |
| `mobile` | Mobile document structure configuration | _SiteMobile_ | `-` |
| `moduleCompatible` | Module compatible config | _Record<string, string>_ | `-` |

#### Module Compatible

Some external dependencies may need to be compatible with module syntax to achieve the purpose of compiling correctly to `commonjs` and `esmodule`. For example, the wording of `esmodule` of `dayjs` is

```js
import dayjs from 'dayjs/esm'
```

In order to build `commonjs`, the writing method is

```js
import * as dayjs from 'dayjs'
```

In the project, we embrace the first way of writing the `esmodule` module, and make the following configuration for adaptation

```js
// varlet.config.js
module.exports = {
  moduleCompatible: {
    "import dayjs from 'dayjs/esm'\n": "import * as dayjs from 'dayjs'\n"
  }
}
```

#### SiteThemes

Theme variables are related,
because the default theme variables may be modified from time to time,
subject to the theme of the `varlet` official document

| Variable |
| ----- |
| `color-body` |
| `color-bar` |
| `color-sub-bar` |
| `color-text` |
| `color-sub-text` |
| `color-border` |
| `color-shadow` |
| `color-introduce-border` |
| `color-primary` |
| `color-link` |
| `color-type` |
| `color-progress` |
| `color-progress-track` |
| `color-side-bar` |
| `color-side-bar-active-background` |
| `color-app-bar` |
| `color-nav-button-hover-background` |
| `color-pc-language-active` |
| `color-pc-language-active-background` |
| `color-mobile-cell-hover` |
| `color-mobile-language-active` |
| `color-mobile-language-active-background` |

#### SiteHighlight

Code snippets are highlighted, based on [highlight.js](https://highlightjs.org/)

| Parameter | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `style` | highlight css link | _string_ | `-` |

#### SiteAnalysis

Statistics related to buried points

| Parameter | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `baidu` | Baidu statistics script address | _string_ | `-` |

#### SitePC, SiteMobile

The document structure is partly related, and the example configuration is as follows

```js
module.exports = {
  defaultLanguage: 'en-US',
  pc: {
    redirect: '/home',
    title: {
      'en-US': 'A components library',
    },
    header: {
      darkMode: null,
      i18n: null,
      github: 'https://github.com/varletjs/varlet',
    },
    menu: [
      {
        text: {
          'en-US': 'Develop Guide',
        },
        // Sidebar menu directory
        type: 1,
      },
      {
        text: {
          'en-US': 'Basic Intro',
        },
        doc: 'home',
        // Index the md document in the root directory of the project
        type: 3,
      },
      {
        text: {
          'en-US': 'Basic Component',
        },
        type: 1,
      },
      {
        text: {
          'en-US': 'Button',
        },
        doc: 'button',
        // Md document in the root directory of the index component
        type: 2,
      },
    ],
  },
  mobile: {
    redirect: '/home',
    title: {
      'en-US': 'A components library',
    },
    header: {
      darkMode: null,
      i18n: null,
      playground: null,
      github: 'https://github.com/varletjs/varlet',
    },
  },
}
```

### Commands Intro

#### Start the development server

```shell
varlet-cli dev
```

#### Build documentation site

```shell
varlet-cli build
```

#### Preview documentation site

```shell
varlet-cli preview
```

#### Build component library code

```shell
varlet-cli compile
```

#### Perform all unit tests

```shell
varlet-cli test
```

#### Execute unit tests in watch mode

```shell
varlet-cli test -w
or
varlet-cli test -wa
```

#### Lint code

```shell
varlet-cli lint
```

#### Lint commit message

```shell
varlet-cli commit-lint
```

#### Generate changelog

```shell
varlet-cli changelog
```

#### Release component library

```shell
varlet-cli release
```

#### Generate a project template
```shell
varlet-cli gen <projectName>
```

### babel

To configure `babel`, first specify the target browser in `package.json`

```json
{
  "browserslist": [
    "Chrome >= 51",
    "iOS >= 10"
  ]
}
```

create `babel.config,js`

```js
// babel.config.js
module.exports = {
  presets: [
    [
      '@varlet/cli/preset',
      {
        loose: process.env.NODE_ENV === 'compile',
      },
    ],
  ],
}
```

### git and npm

#### git-hook

`simple-git-hooks`, `lint-staged` cooperate with `eslint`, `stylelint`, `varlet-cli commit-lint` to check before commit,
`package.json` configuration is as follows

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm exec lint-staged --allow-empty --concurrent false",
    "commit-msg": "npx --no-install varlet-cli commit-lint $1"
  },
  "lint-staged": {
    "*.{ts,tsx,js,vue,less}": "prettier --write",
    "*.{ts,tsx,js,vue}": "eslint --fix",
    "*.{vue,css,less}": "stylelint --fix"
  },
  "eslintConfig": {
    "root": true,
    "ignorePatterns": [
      "es/**",
      "umd/**",
      "site/**",
      "public/**",
      "src/*/__tests__/**",
      ".varlet/**"
    ],
    "extends": [
      "@varlet"
    ]
  },
  "stylelint": {
    "extends": [
      "@varlet/stylelint-config"
    ],
    "ignoreFiles": [
      "es/**",
      "umd/**",
      "site/**",
      "coverage/**",
      "public/**",
      "highlight/**"
    ]
  }
}
```

Mount Git Hooks

```shell
npx simple-git-hooks
```

create `.prettierignore`

```text
// .prettierignore
coverage/**
es/**
umd/**
site/**
public/**
src/*/__tests__/**
*.md
```

### typescript

create `tsconfig.json`

```json
{
  "compilerOptions": {
    "strict": true,
    "downlevelIteration": true,
    "declaration": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowJs": true,
    "lib": ["esnext", "dom"],
    "allowSyntheticDefaultImports": true,
    "jsx": "preserve"
  }
}
```

#### Note before release

- 1.The registry of npm must set to the official npm mirror
- 2.The npm must execute the login command for user login