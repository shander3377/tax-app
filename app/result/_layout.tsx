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
  View,
  Text
} from 'tamagui'

import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";


//if tsx nahi ho rahi, then jsx mai component banake idhr simply import  karlo.
export default function Layout() {
  let old = true;
  let income = 3600000;
  let homeLoanamt = 250000;
  let homeloanUsed=homeLoanamt;
  let lic = 200000;
  let licUsed = lic
  const stdDed = old?50000:75000;
  let taxableValue=0;
  let tax = 0;//mostImp
  if(old){

    if(homeLoanamt>200000){
      homeloanUsed=200000;
    }
    if(lic>200000){
      licUsed = 200000;
    }

    taxableValue = income - (stdDed+homeloanUsed+licUsed);

    if (taxableValue<=500000){
      tax = 0
    }else{
      if(taxableValue<=1000000){
        let i=0.05*250000;
        let j=0.2*(taxableValue-500000)
        tax = i+j;
      }else{
        let i = 0.05*250000;
        let j = 0.2*500000;
        let k = 0.3*(taxableValue-1000000);
        tax = i+j+k;
      }
    }
  }else{
    taxableValue = income-stdDed;
    if (taxableValue<=700000){
      tax = 0;
    }else{
      if(taxableValue<=1000000){
        let i=0.05*400000;
        let j=0.1*(taxableValue-700000)
        tax = i+j;
      }else{
        if(taxableValue<=1200000){
          let i = 0.05*400000;
          let j = 0.1*300000;
          let k = 0.15*(taxableValue-1000000);
          tax = i+j+k;
        }else{
          if(taxableValue<=1500000){
            let i = 0.05*400000;
            let j = 0.1*300000;
            let k = 0.15*200000;
            let l = 0.2*(taxableValue-1200000);
            tax = i+j+k+l;
          }else{
            let i = 0.05*400000;
            let j = 0.1*300000;
            let k = 0.15*200000;
            let l = 0.2*300000;
            let m = 0.3*(taxableValue-1500000);
            tax = i+j+k+l+m;
          }
        }
      }
    }
  }

  return (
    <MySafeAreaView>
      <MyStack>
        <YStack top="$6">
        <SizableText>Final tax calculation result report</SizableText>
          <Text>Income: </Text>
          <Text>Payable Home Loan Amount (Of Current FY): </Text>
          <Text>Home Loan Deduction: </Text>
          <Text>LIC: </Text>
          <Text>LIC Deduction: </Text>
          <Text>Final Taxable Amount:  </Text>
          <Text>Total Payable Tax Amount: </Text>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  )
}
