import React from 'react'
import type { StackProps, TabLayout, TabsTabProps } from 'tamagui'
import {
  AnimatePresence,
  Button,
  H5,
  SizableText,
  Tabs,
  XStack,
  YStack,
  styled,
  View
} from 'tamagui'
import Tab1 from "./tab1"
import Tab2 from "./tab2"

export default function Layout() {
  return (
    <YStack top="$6" theme="dark">
      <TabsAdvancedUnderline />
      </YStack>
  )
}

const TabsAdvancedUnderline = () => {
  const [tabState, setTabState] = React.useState<{
    currentTab: string
    /**
     * Layout of the Tab user might intend to select (hovering / focusing)
     */
    intentAt: TabLayout | null
    /**
     * Layout of the Tab user selected
     */
    activeAt: TabLayout | null
    /**
     * Used to get the direction of activation for animating the active indicator
     */
    prevActiveAt: TabLayout | null
  }>({
    activeAt: null,
    currentTab: 'tab1',
    intentAt: null,
    prevActiveAt: null,
  })

  const setCurrentTab = (currentTab: string) => setTabState({ ...tabState, currentTab })
  const setIntentIndicator = (intentAt) => setTabState({ ...tabState, intentAt })
  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt })
  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState

  // 1 = right, 0 = nowhere, -1 = left
  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1
  })()

  const handleOnInteraction: TabsTabProps['onInteraction'] = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout)


    } else {
      setIntentIndicator(layout)
    }
  }

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      size="$4"
      height={200}
      flexDirection="column"
      activationMode="manual"
      backgroundColor="$background"
      borderRadius="$4"
    >
      <YStack>
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicator
              width={intentAt.width}
              height="$0.5"
              x={intentAt.x}
              bottom={0}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeAt && (
            <TabsRovingIndicator
              theme="active"
              active
              width={activeAt.width}
              height="$0.5"
              x={activeAt.x}
              bottom={0}
            />
          )}
        </AnimatePresence>
        <Tabs.List
          disablePassBorderRadius
          loop={false}
          aria-label="Manage your account"
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          paddingBottom="$1.5"
          borderColor="$color3"
          borderBottomWidth="$0.5"
          backgroundColor="transparent"
        >
          <Tabs.Tab
            flex={1}
            
            unstyled
            paddingHorizontal="$5"
            paddingVertical="$2"
            value="old"
            onInteraction={handleOnInteraction}
          >
            <SizableText>New Regime</SizableText>

          </Tabs.Tab>
          <Tabs.Tab
            flex={1}
            unstyled
            paddingHorizontal="$5"
            paddingVertical="$2"
            value="new"
            onInteraction={handleOnInteraction}
          >
            <SizableText>New Regime</SizableText>
          </Tabs.Tab>
         
        </Tabs.List>
      </YStack>

      <AnimatePresence exitBeforeEnter custom={{ direction }} initial={false}>
        <AnimatedYStack key="old">
          <Tabs.Content value={currentTab} forceMount flex={1} justifyContent="center">
            {currentTab == "old"? (
            <Tab1/>):(
            <Tab2/>
          )}
          </Tabs.Content>
          
        </AnimatedYStack>
      </AnimatePresence>
    </Tabs>
  )
}

const TabsRovingIndicator = ({ active, ...props }: { active?: boolean } & StackProps) => {
  return (
    <YStack
      position="absolute"
      backgroundColor="$color5"
      opacity={0.7}
      animation="100ms"
      enterStyle={{
        opacity: 0,
      }}
      exitStyle={{
        opacity: 0,
      }}
      {...(active && {
        backgroundColor: '$color8',
        opacity: 0.6,
      })}
      {...props}
    />
  )
}

const AnimatedYStack = styled(YStack, {
  flex: 1,
  x: 0,
  opacity: 1,

  animation: '100ms',
  variants: {
    // 1 = right, 0 = nowhere, -1 = left
    direction: {
      ':number': (direction) => ({
        enterStyle: {
          x: direction > 0 ? -25 : 25,
          opacity: 0,
        },
        exitStyle: {
          zIndex: 0,
          x: direction < 0 ? -25 : 25,
          opacity: 0,
        },
      }),
    },
  } as const,
})