import { useRouter } from 'next/router'

import { Box } from 'components/common/box/Box'
import { Text } from 'components/common/text/Text'
import { Breakpoint, Theme } from 'components/Theme'

import { Id, items } from 'utils/items'

export const Items = () => {
  const router = useRouter()
  const { MOBILE_S, LAPTOP } = Breakpoint
  const { primaryGrey, primaryOrange } = Theme.colors

  return (
    <Box
      breakpoints={{
        [MOBILE_S]: { marginTop: '50px', justifyContent: 'center' },
        [LAPTOP]: {
          marginTop: '0px',
          direction: 'row',
          alignItems: 'center',
        },
      }}>
      {Object.values(Id).map((id) => {
        const item = items[id]
        const { title, href } = item
        const isActivePage = router.pathname === href

        return (
          <Box
            key={id}
            as="a"
            href={href}
            direction="row"
            breakpoints={{
              [MOBILE_S]: { margin: '12px 16px' },
              [LAPTOP]: { margin: '0px 24px' },
            }}>
            <Text
              color={isActivePage ? primaryOrange : primaryGrey}
              textDecoration={isActivePage ? 'underline' : 'none'}
              variant="leia"
              subStyle="bold">
              {title}
            </Text>
          </Box>
        )
      })}
    </Box>
  )
}
