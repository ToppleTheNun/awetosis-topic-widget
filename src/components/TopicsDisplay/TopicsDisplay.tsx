import React, { useCallback, useMemo, useState } from "react";
import { Box } from "rebass";
import { parseJsonStringToTopics } from "../../utils/topics";
import TopicCard from "./TopicCard";
import { DisplayTopic } from "../../types";
import TopicCountdown from "./TopicCountdown";

const urlSearchParams = new URLSearchParams(window.location.search);
const topicsFromQuery: DisplayTopic[] = parseJsonStringToTopics(
  urlSearchParams.get("topics")
)
  .filter(topic => topic.amount > 0 && topic.text !== "")
  .map((topic, idx) => ({ ...topic, complete: false, id: idx }));

const TopicsDisplay: React.FC = () => {
  const [topics, setTopics] = useState(topicsFromQuery);
  const incompleteTopics = useMemo(
    () => topics.filter(topic => !topic.complete),
    [topics]
  );
  const firstTopic = useMemo(
    () => (incompleteTopics.length > 0 ? incompleteTopics[0] : null),
    [incompleteTopics]
  );
  const markFirstTopicAsCompleted = useCallback(() => {
    if (!firstTopic) {
      return;
    }
    setTopics(oldTopics =>
      oldTopics.map(oldTopic => {
        if (oldTopic.id === firstTopic.id) {
          return { ...oldTopic, complete: true };
        }
        return oldTopic;
      })
    );
  }, [firstTopic]);

  return (
    <Box>
      <TopicCountdown
        currentTopic={firstTopic}
        markCurrentTopicAsCompleted={markFirstTopicAsCompleted}
      />
      {incompleteTopics.map((topic, idx) => (
        <TopicCard
          key={`topic-${idx}`}
          first={idx === 0}
          sx={
            idx !== incompleteTopics.length - 1
              ? { borderBottom: "1px solid black" }
              : {}
          }
          topic={topic}
        />
      ))}
    </Box>
  );
};

export default TopicsDisplay;
