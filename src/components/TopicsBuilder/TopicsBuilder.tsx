import React, { useCallback, useState } from "react";
import { Box, Flex } from "rebass";
import { Redirect } from "react-router-dom";

import TopicsBuilderNavbar from "./TopicsBuilderNavbar";
import TopicsBuilderForm from "./TopicsBuilderForm";
import { FormTopic, Topic } from "../../types";
import {
  formTopicsToTopics,
  parseJsonStringToTopics,
  topicsToFormTopics
} from "../../utils/topics";

const urlSearchParams = new URLSearchParams(window.location.search);
const topicsFromQuery: Topic[] = parseJsonStringToTopics(
  urlSearchParams.get("topics")
).filter(topic => topic.amount > 0 && topic.text !== "");

const TopicsBuilder: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>(topicsFromQuery);
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
    <Box bg="pastelGray" height="100vh" width="100vw">
      <TopicsBuilderNavbar />
      <Box mx="auto" width={[1, 3 / 4]}>
        <TopicsBuilderForm
          topics={topicsToFormTopics(topics)}
          setTopics={setFilteredTopics}
        />
      </Box>
    </Box>
  );
};

export default TopicsBuilder;
