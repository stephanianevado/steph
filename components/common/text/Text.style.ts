import type { PropsWithChildren } from 'react'

import styled from 'styled-components'

import { getAnimation } from 'components/animations/animation'
import { Theme } from 'components/Theme'

import type {
  AlignContent,
  AlignItems,
  AlignSelf,
  BreakpointStyles,
  Color,
  Direction,
  Display,
  JustifyContent,
  Size,
  Variant,
} from 'types/index'

import { createResponsiveStyle } from 'utils/createResponsiveStyle'
import { getTypographyStyle } from 'utils/getTypographyStyle'
import { type MarginProps } from 'utils/styledMargins'
import { type PaddingProps } from 'utils/styledPadding'

const { primaryBlue } = Theme.colors

export type TextProps = PaddingProps &
  MarginProps &
  PropsWithChildren<{
    display?: Display
    grow?: number
    shrink?: number
    basis?: Size
    flex?: number
    direction?: Direction
    wrap?: 'nowrap' | 'wrap' | ' wrap-reverse'
    justifyContent?: JustifyContent
    alignContent?: AlignContent
    alignItems?: AlignItems
    alignSelf?: AlignSelf
    id?: string
    as?: string
    children?: React.ReactNode | React.ReactNode[]
    variant?: Variant
    subStyle?: 'normal' | 'bold'
    rel?: string
    color?: Color
    align?: 'center' | 'left' | 'right'
    textDecoration?: 'none' | 'underline'
    textDecorationColor?: Color
    textUnderlineOffset?: string
    textWrap?: 'wrap' | 'nowrap' | 'balance'
    whiteSpace?:
      | 'normal'
      | 'nowrap'
      | 'pre'
      | 'pre-wrap'
      | 'pre-line'
      | 'break-spaces'
    animation?: string
    hover?: Record<string, unknown>
    disabled?: boolean
    breakpoints?: Record<string, BreakpointStyles>
  }>

export const StyledText = styled.div`
  margin: 0;
  padding: 4px 0px;
  display: ${(props: TextProps) => props.display || 'list'};
  flex-grow: ${(props: TextProps) => props.grow || 0};
  flex-shrink: ${(props: TextProps) => props.shrink || 0};
  flex-basis: ${(props: TextProps) => props.basis || 'auto'};
  flex: ${(props: TextProps) => props.flex || 'flex'};
  flex-direction: ${(props: TextProps) => props.direction || 'row'};
  flex-wrap: ${(props: TextProps) => props.wrap || 'nowrap'};
  justify-content: ${(props: TextProps) =>
    props.justifyContent || 'flex-start'};
  align-content: ${(props: TextProps) => props.alignContent || 'start'};
  align-items: ${(props: TextProps) => props.alignItems || 'stretch'};
  align-self: ${(props: TextProps) => props.alignSelf};
  color: ${(props: TextProps) => props.color || 'transparent'};
  text-align: ${(props: TextProps) => props.align || 'left'};
  text-decoration: ${(props: TextProps) => props.textDecoration || 'none'};
  text-decoration-color: ${(props: TextProps) =>
    props.textDecorationColor || 'none'};
  text-underline-offset: ${(props: TextProps) =>
    props.textUnderlineOffset || 'none'};
  text-wrap:  ${(props: TextProps) => props.textWrap || 'wrap'}; 
  list-style-position: inside;
  &:hover {
    ${(props: TextProps) => props.hover};
  };
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${primaryBlue}, 0px 0px 0 3px;
    &:not(:focus-visible) {
      box-shadow: none;
    },
  };
  animation: ${(props: TextProps) =>
    props.animation && getAnimation(props.animation)};
  ${({
    variant,
    subStyle,
  }: {
    variant: Variant
    subStyle: TextProps['subStyle']
  }) => (variant || subStyle) && getTypographyStyle(variant, subStyle)};
  ${({ breakpoints }: { breakpoints: TextProps['breakpoints'] }) =>
    breakpoints && createResponsiveStyle(breakpoints)};
`
