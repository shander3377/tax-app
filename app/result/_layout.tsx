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

//if tsx nahi ho rahi, then jsx mai component banake idhr simply import  karlo.
export default function Layout() {
  return (
    <YStack top="$6">
<SizableText>Final tax calculation result report</SizableText>
    </YStack>
  )
}

