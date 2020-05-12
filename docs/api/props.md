---
name: Props
route: /api/props
menu: API
---

# Props

- spaceBetween --> `Boolean`

- spaceEvently --> `Boolean`

- spaceAround --> `Boolean`

- justifyEnd --> `Boolean`

- flexWrap --> `Boolean`

- flexEndSelf --> `Boolean`

- alignEnd --> `Boolean`

- justifyStart --> `Boolean`

- addStyle --> `React.CSSProperties`

## Examples

```javascript
import Flexy from "react-flexy";

const FlexWrap = () => {
  return (
    <Flexy.Horizontal flexWrap>
      <h1>Usage</h1>
      <Content />
    </Flexy.Horizontal>
  );
};

const SpaceBetween = () => {
  return (
    <Flexy.Vertical spaceBetween>
      <h1>Usage</h1>
      <Content />
    </Flexy.Vertical>
  );
};

const SpaceEvently = () => {
  return (
    <Flexy.Vertical spaceEvently>
      <h1>Usage</h1>
      <Content />
    </Flexy.Vertical>
  );
};
```

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
