/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import flex from './Flex'
import styles from './styles'

const spacesToStyle = (direction) => (spaceSize) => (spaceConfig) => {
  const style = `${direction}${spaceSize}`
  return styles(spaceConfig)[style]
}

const common = (p) => {
  return {
    ...(p.spaceBetween && flex.spaceBetween),
    ...(p.spaceEvently && flex.spaceEvently),
    ...(p.spaceAround && flex.spaceAround),
    ...(p.justifyEnd && flex.justifyEnd),
    ...(p.flexWrap && flex.flexWrap),
    ...(p.flexEndSelf && flex.flexEndSelf),
    ...(p.alignEnd && flex.alignEnd),
    ...(p.justifyStart && flex.justifyStart),
    ...(p.flex && {
      flex: p.flex,
    }),
    ...(p.styles && p.styles),
  }
}

const Horizontal = ({
  center,
  centerV,
  centerH,
  children,
  spaceAll,
  addStyle,
  dataCy,
  config,
  ...props
}) => {
  const spaceStyle = spacesToStyle('h')(spaceAll)(config)

  const base = css({
    ...flex.horizontal,
    ...(center && flex.centerHorizontal),
    ...(centerV && flex.centerHorizontalV),
    ...(centerH && flex.centerHorizontalH),
    ...common(props),
  })

  return (
    <div css={[base, spaceStyle, addStyle]} {...props}>
      {children}
    </div>
  )
}

const Vertical = ({
  center,
  centerV,
  centerH,
  children,
  spaceAll,
  addStyle,
  dataCy,
  config,
  ...props
}) => {
  const spaceStyle = spacesToStyle('v')(spaceAll)(config)

  const base = css({
    ...flex.vertical,
    ...(center && flex.centerVertical),
    ...(centerV && flex.centerVerticalV),
    ...(centerH && flex.centerVerticalH),
    ...common(props),
  })

  return (
    <div css={[base, spaceStyle, addStyle]} {...props}>
      {children}
    </div>
  )
}

export default { Horizontal, Vertical }
