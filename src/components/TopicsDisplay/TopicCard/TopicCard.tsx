import React, { forwardRef } from "react";
import { BoxProps, Card, Heading } from "rebass";
import { Topic } from "../../../types";

type TopicCardProps = {
  topic: Topic;
} & BoxProps;

const TopicCard: React.FC<TopicCardProps> = forwardRef(
  ({ topic, ...otherProps }, ref) => (
    <Card bg="primary" px={2} py={2} ref={ref} width={1} {...otherProps}>
      <Heading color="background">{topic.text}</Heading>
    </Card>
  )
);

export default TopicCard;
