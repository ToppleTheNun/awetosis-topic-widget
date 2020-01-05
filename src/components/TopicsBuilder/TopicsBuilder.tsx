import React, { useState } from "react";
import { Box } from "rebass";

import TopicsBuilderNavbar from "./TopicsBuilderNavbar/TopicsBuilderNavbar";
import TopicsBuilderForm from "./TopicsBuilderForm";
import { FormTopic } from "../../types";

const TopicsBuilder: React.FC = () => {
  const [, setTopics] = useState<FormTopic[]>([]);

  return (
    <Box>
      <TopicsBuilderNavbar />
      <Box width={[1, 3 / 4]} mx="auto">
        <TopicsBuilderForm setTopics={setTopics} />
      </Box>
    </Box>
  );
};

export default TopicsBuilder;
