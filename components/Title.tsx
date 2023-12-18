import { fadeInRight } from 'components/animations/animation'
import { Text } from 'components/common/text/Text'
import type { TextProps } from 'components/common/text/Text.style'
import { Theme } from 'components/Theme'

type Props = {
  header?: string
  subHeader: string
  variant?: TextProps['variant']
}

export const Title = ({
  header = 'h1',
  subHeader = 'h2',
  variant = 'vader',
}: Props) => {
  const { secondaryBlack, primaryGrey, primaryOrange } = Theme.colors

  return (
    <>
      <Text
        as="h1"
        color={secondaryBlack}
        variant="leia"
        textDecoration="underline"
        textDecorationColor={primaryOrange}
        textUnderlineOffset="4px">
        {header}
      </Text>

      <Text
        as="h2"
        color={primaryGrey}
        variant={variant}
        animationName={fadeInRight}
        animationDuration="2s"
        animationTimingFunction="ease-out">
        {subHeader} &rarr;
      </Text>
    </>
  )
}
