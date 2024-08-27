// @ts-nocheck
import { H5, Tabs, Text, Input, Button, Separator } from "tamagui";
import { MyStack } from "../../components/MyStack";

export default function Tab1() {

  return (
    <MyStack space="$4" padding="$4">
      <H5>Old Regime Tax Calculation</H5>
      
      <Input 
        placeholder="Annual Salary" 
        size="$4" 
        borderWidth={2} 
      />
      <Separator />
      <Input 
        placeholder="House Loan" 
        size="$4" 
        borderWidth={2} 
      />
      <Separator />
      <Input 
        placeholder="House Loan Interest" 
        size="$4" 
        borderWidth={2} 
      />
      <Separator />
      <Input 
        placeholder="LIC" 
        size="$4" 
        borderWidth={2} 
      />
      
      <Button onPress={() => router.push("/results")}>
        Calculate my tax
      </Button>
    </MyStack>
  );
}
