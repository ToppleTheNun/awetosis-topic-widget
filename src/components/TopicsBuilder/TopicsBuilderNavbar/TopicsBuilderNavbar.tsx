import React from "react";
import { Flex, Text } from "rebass";

const TopicsBuilderNavbar: React.FC = () => (
  <Flex px={2} color="background" bg="primary" alignItems="center">
    <Text width={[1, 3 / 4]} mx="auto" p={2} fontWeight="bold">
      Awetosis Topics Builder
    </Text>
  </Flex>
);

export default TopicsBuilderNavbar;
