import React from "react";
import { Box, Card, Heading, Text } from "rebass";
import useQuery from "../../hooks/useQuery";
import { Topic } from "../../types";
import { parseJsonStringToTopics } from "../../utils/topics";
import { capitalize } from "../../utils/strings";

const TopicsDisplay: React.FC = () => {
  const query = useQuery();
  const topics: Topic[] = parseJsonStringToTopics(query.get("topics"));

  return (
    <Box height={1} width={1} bg="gray">
      {topics.map((topic, idx) => (
        <Card key={`topic-${idx}`} width={1} px={2} py={2}>
          <Heading>Topic</Heading>
          <Text>{topic.text}</Text>
          <Heading>Duration</Heading>
          <Text>
            {topic.amount} {capitalize(topic.unit)}
          </Text>
        </Card>
      ))}
    </Box>
  );
};

export default TopicsDisplay;
