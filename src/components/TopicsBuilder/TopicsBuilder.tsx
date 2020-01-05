import React, { useCallback, useState } from "react";
import { Box } from "rebass";

import TopicsBuilderNavbar from "./TopicsBuilderNavbar/TopicsBuilderNavbar";
import TopicsBuilderForm from "./TopicsBuilderForm";
import { FormTopic, Topic } from "../../types";
import useQuery from "../../hooks/useQuery";
import {
  formTopicsToTopics,
  parseJsonStringToTopics,
  topicsToFormTopics
} from "../../utils/topics";

const TopicsBuilder: React.FC = () => {
  const query = useQuery();
  const initialTopics: Topic[] = parseJsonStringToTopics(query.get("topics"));
  const [, setTopics] = useState<Topic[]>([]);

  const setFilteredTopics = useCallback((formTopics: FormTopic[]) => {
    setTopics(
      formTopicsToTopics(formTopics).filter(topic => topic.text && topic.amount)
    );
  }, []);

  return (
    <Box>
      <TopicsBuilderNavbar />
      <Box width={[1, 3 / 4]} mx="auto">
        <TopicsBuilderForm
          initialTopics={topicsToFormTopics(initialTopics)}
          setTopics={setFilteredTopics}
        />
      </Box>
    </Box>
  );
};

export default TopicsBuilder;
