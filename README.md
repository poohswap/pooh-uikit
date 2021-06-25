# 🐻 PoohSwap UI-kit

PoohSwap UIkit is a set of React components and hooks used to build pages on Poohswap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add poohswap/uikit`

## Setup

### Theme

Before using Pancake UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'poohswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'poohswap/uikit'
...
<ResetCSS />
```

### Types

This project built with Typescript and export all the relevant types.

