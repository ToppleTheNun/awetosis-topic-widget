import React, { forwardRef } from "react";
import { BoxProps, Card, Heading } from "rebass";
import { Topic } from "../../../types";

type TopicCardProps = {
  first: boolean;
  topic: Topic;
} & BoxProps;

const TopicCard: React.FC<TopicCardProps> = forwardRef(
  ({ first, topic, ...otherProps }, ref) => (
    <Card
      bg={first ? "oliveDrab" : "shadow"}
      px={2}
      py={2}
      ref={ref}
      width={1}
      {...otherProps}
    >
      <Heading color="lightText">{topic.text}</Heading>
    </Card>
  )
);

export default TopicCard;
