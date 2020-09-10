import React, { useCallback, useEffect, useState } from "react";
import { Box } from "rebass";

import TopicsBuilderNavbar from "./TopicsBuilderNavbar";
import TopicsBuilderForm from "./TopicsBuilderForm";
import { FormTopic, Topic } from "../../types";
import {
  formTopicsToTopics,
  parseJsonStringToTopics,
  topicsToFormTopics,
} from "../../utils/topics";
import useQuery from "../../hooks/useQuery";

const TopicsBuilder: React.FC = () => {
  const query = useQuery();
  const [topics, setTopics] = useState<Topic[]>(
    parseJsonStringToTopics(query.get("topics")).filter(
      (topic) => topic.amount > 0 && topic.text !== ""
    )
  );
  const [displayUrl, setDisplayUrl] = useState<string | null>(null);

  const setFilteredTopics = useCallback((formTopics: FormTopic[]) => {
    setTopics(
      formTopicsToTopics(formTopics).filter(
        (topic) => topic.text && topic.amount
      )
    );
  }, []);

  useEffect(() => {
    let host = window.location.hostname;
    if (window.location.port !== "") {
      host = `${window.location.hostname}:${window.location.port}`;
    }
    setDisplayUrl(
      `${window.location.protocol}//${host}${
        window.location.pathname
      }display?topics=${btoa(JSON.stringify(topics))}`
    );
  }, [topics]);

  return (
    <Box bg="pastelGray" height="100vh" width="100vw">
      <TopicsBuilderNavbar />
      <Box mx="auto" width={[1, 3 / 4]}>
        <TopicsBuilderForm
          displayUrl={displayUrl}
          topics={topicsToFormTopics(topics)}
          setTopics={setFilteredTopics}
        />
      </Box>
    </Box>
  );
};

export default TopicsBuilder;
