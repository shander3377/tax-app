// @ts-nocheck
import { H5, Tabs, Text, Input, Button, Tooltip } from "tamagui";
import { MyStack } from "../../components/MyStack";

export default function Tab1() {

  return (
    <MyStack space="$4" padding="$4">
      <H5>New Regime Tax Calculation</H5>
      
      <Input 
        placeholder="Annual Salary" 
        size="$4" 
        borderWidth={2} 
      />
      
      <MyStack direction="row" alignItems="center">
        <Button onPress={() => router.push("/results")}>
        Calculate my tax
        </Button>
        <Tooltip content="Enter">
          <Text></Text>
        </Tooltip>
      </MyStack>
    </MyStack>
  );
}