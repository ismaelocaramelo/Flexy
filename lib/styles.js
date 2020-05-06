/** @jsx jsx */
import { css } from "@emotion/react";

const defaultConfig = {
  spaceXS: "0.25rem",
  spaceS: "0.5rem",
  spaceM: "0.75rem",
  spaceL: "1rem",
  spaceXL: "1.25rem",
  space2XL: "1.5rem",
  space3XL: "2rem",
};

export default (config) => {
  const mergeConfig = {
    ...defaultConfig,
    ...config,
  };

  const suffixToSpaces = {
    xs: mergeConfig.spaceXS,
    s: mergeConfig.spaceS,
    m: mergeConfig.spaceM,
    l: mergeConfig.spaceL,
    xl: mergeConfig.spaceXL,
    "2xl": mergeConfig.space2XL,
    "3xl": mergeConfig.space3XL,
  };

  const noMarginRightLastChild = css({
    "& > *:last-child": {
      marginRight: 0,
    },
  });

  const noMarginBottomLastChild = css({
    "& > *:last-child": {
      marginBottom: 0,
    },
  });

  const spaceAllH = (suffix) =>
    css([
      {
        "& > *": {
          marginRight: suffixToSpaces[suffix],
          border: "1px solid red",
        },
      },
      noMarginRightLastChild,
    ]);

  const spaceAllV = (suffix) =>
    css([
      {
        "& > *": {
          marginBottom: suffixToSpaces[suffix],
          border: "1px solid red",
        },
      },
      noMarginBottomLastChild,
    ]);

  return {
    hxs: spaceAllH("xs"),
    hs: spaceAllH("s"),
    hm: spaceAllH("m"),
    hl: spaceAllH("l"),
    hxl: spaceAllH("xl"),
    h2xl: spaceAllH("2xl"),
    h3xl: spaceAllH("3xl"),
    vxs: spaceAllV("xs"),
    vs: spaceAllV("s"),
    vm: spaceAllV("m"),
    vl: spaceAllV("l"),
    vxl: spaceAllV("xl"),
    v2xl: spaceAllV("2xl"),
    v3xl: spaceAllV("3xl"),
  };
};
