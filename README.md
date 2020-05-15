---
name: Getting Started
route: /
---

![alt text](./assets/flexy-pink-lg.png)

A extremely lightweight package to build amazing flex components.

## Features

- [Lightweight](#quick-start)
- [Composable](#composable)
- [Style extension](#style-extension)
- [Space tokens configurable](#configurable)

## Documentation

Visit https://react-flexy.netlify.app/

## Motivation

One of the things nowadays I enjoy is Flexbox. And when it comes with React we can build agnostic components in such an amazing way that leverage the full potential of componentization.

However, dealing with flex properties and build reusable components becomes hard.

It leads to inconsistencies throughout the project. Not to mention the amount of code which is repetitive over the place. Another aspect to mention is sometimes you'd like to customize a component but the API exposed does not allow to do that and you have to go to the implementation details and modify it as you wish. That potentially could break other consumers.

Then you can build those components which are let say 'private' like layout holders which just suit that case and you do not want to build a reusable namish component for that. The problem is when another developer tries to visualize the entire picture by reading the markup.

And guess what? ain't can get any clue about it. No good choice.

This is how Flexy was born, to overcome those situations by giving a meaningful way to build amazing composable UI components.

## Installation

```
npm install react-flexy
```

## Quick start

```javascript
import Flexy from "react-flexy";

const Horizontally = () => {
  return (
    <Flexy.Horizontal center spaceAll="m">
      <h1>Usage</h1>
      <Content />
    </Flexy.Horizontal>
  );
};

const Vertically = () => {
  return (
    <Flexy.Vertical spaceAll="m">
      <h1>Usage</h1>
      <Content />
    </Flexy.Vertical>
  );
};
```

## Composable

```javascript
import Flexy from "react-flexy";

const Composable = () => {
  return (
    <Flexy.Horizontal center spaceAll="m">
      <h1>Title</h1>
      <Flexy.Vertical center spaceAll="m">
        <Flexy.Horizontal center spaceAll="m">
          <h1>Another title</h1>
          <Flexy.Vertical center spaceAll="m">
            <h1>Other title</h1>
            <Content />
          </Flexy.Vertical>
        </Flexy.Horizontal>
      </Flexy.Vertical>
    </Flexy.Horizontal>
  );
};
```

## Configurable

```javascript
import Flexy from "react-flexy";

// You could customize all the spaces,
// the left ones will filled with the default config
const customTokens = {
  spaceXS: "1rem",
  spaceS: "2rem",
  spaceM: "3rem",
  spaceL: "4rem",
};

// Probably you'd like to handle the config in a theme React Context
const Configurable = () => {
  return (
    <Flexy.Horizontal config={customTokens} center spaceAll="m">
      <h1>Title</h1>
    </Flexy.Horizontal>
  );
};
```

## Style extension

```javascript
import Flexy from "react-flexy";

const StyleExtension = () => {
  return (
    <Flexy.Horizontal addStyle={{ height: "300px" }} center spaceAll="3xl">
      <h1>Title</h1>
    </Flexy.Horizontal>
  );
};
```
