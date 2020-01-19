import React from "react";
import { Flex, Text } from "rebass";

const TopicsBuilderNavbar: React.FC = () => (
  <Flex px={2} bg="eerieBlack" alignItems="center">
    <Text
      color="lightText"
      fontWeight="bold"
      mx="auto"
      p={2}
      width={[1, 3 / 4]}
    >
      Awetosis Topics Builder
    </Text>
  </Flex>
);

export default TopicsBuilderNavbar;
