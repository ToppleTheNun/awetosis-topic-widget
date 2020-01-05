import React, { useCallback, useState } from "react";
import { Box } from "rebass";

import TopicsBuilderNavbar from "./TopicsBuilderNavbar/TopicsBuilderNavbar";
import TopicsBuilderForm from "./TopicsBuilderForm";
import { FormTopic, Topic } from "../../types";

const TopicsBuilder: React.FC = () => {
  const [, setTopics] = useState<Topic[]>([]);

  const setFilteredTopics = useCallback((formTopics: FormTopic[]) => {
    setTopics(
      formTopics
        .map<Topic>(formTopic => ({
          text: formTopic.text,
          amount: Number(formTopic.amount),
          unit: formTopic.unit
        }))
        .filter(topic => topic.text && topic.amount)
    );
  }, []);

  return (
    <Box>
      <TopicsBuilderNavbar />
      <Box width={[1, 3 / 4]} mx="auto">
        <TopicsBuilderForm setTopics={setFilteredTopics} />
      </Box>
    </Box>
  );
};

export default TopicsBuilder;
