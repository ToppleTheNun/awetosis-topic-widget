import React from "react";
import { Flex, Heading } from "rebass";
import orcFace from "../../../assets/orc_face.png";

const TopicsBuilderNavbar: React.FC = () => (
  <Flex px={2} bg="eerieBlack" alignItems="center">
    <Heading
      color="lightText"
      mx="auto"
      p={2}
      sx={{
        backgroundImage: `url(${orcFace})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        backgroundSize: "contain"
      }}
      width={[1, 3 / 4]}
    >
      Awetosis Topics Builder
    </Heading>
  </Flex>
);

export default TopicsBuilderNavbar;
