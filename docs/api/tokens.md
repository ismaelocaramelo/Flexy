---
name: Tokens
route: /api/tokens
menu: API
---

# Tokens Config

> It provides a default configuration

```javascript
const defaultConfig = {
  spaceXS: "0.25rem",
  spaceS: "0.5rem",
  spaceM: "0.75rem",
  spaceL: "1rem",
  spaceXL: "1.25rem",
  space2XL: "1.5rem",
  space3XL: "2rem",
};
```

## Custom tokens config

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
