import React, { useCallback, useState } from "react";
import { Box } from "rebass";
import { Redirect } from "react-router-dom";

import TopicsBuilderNavbar from "./TopicsBuilderNavbar";
import TopicsBuilderForm from "./TopicsBuilderForm";
import { FormTopic, Topic } from "../../types";
import {
  formTopicsToTopics,
  parseJsonStringToTopics,
  topicsToFormTopics
} from "../../utils/topics";
import useQuery from "../../hooks/useQuery";

const TopicsBuilder: React.FC = () => {
  const query = useQuery();
  const [topics, setTopics] = useState<Topic[]>(
    parseJsonStringToTopics(query.get("topics")).filter(
      topic => topic.amount > 0 && topic.text !== ""
    )
  );
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
