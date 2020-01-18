import React, { useCallback, useState } from "react";
import { Box } from "rebass";
import { Redirect } from "react-router-dom";

import TopicsBuilderNavbar from "./TopicsBuilderNavbar";
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
  const [topics, setTopics] = useState<Topic[]>([]);
  const [goToDisplay, setGoToDisplay] = useState(false);

  const setFilteredTopics = useCallback((formTopics: FormTopic[]) => {
    setTopics(
      formTopicsToTopics(formTopics).filter(topic => topic.text && topic.amount)
    );
    setGoToDisplay(true);
  }, []);

  if (goToDisplay && topics.length > 0) {
    return <Redirect to={`/display?topics=${JSON.stringify(topics)}`} />;
  }

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
