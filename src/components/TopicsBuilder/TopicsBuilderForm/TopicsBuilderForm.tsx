import React, { useCallback, useState } from "react";
import { Box, Button, Card, Flex, Text } from "rebass";
import { Input, Label, Select } from "@rebass/forms";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";

import { FormTopic, TemporalUnit } from "../../../types";
import { capitalize } from "../../../utils/strings";

type TopicsBuilderFormProps = {
  setTopics: (topics: FormTopic[]) => void;
};

const createArrayWithNumbers = (length: number): number[] => {
  return Array.from({ length }, (_, k) => k + 1);
};

const TopicsBuilderForm: React.FC<TopicsBuilderFormProps> = ({ setTopics }) => {
  const { handleSubmit, register } = useForm();
  const [size, setSize] = useState(1);
  const onSubmit = handleSubmit((values: FieldValues) => {
    const topics: FormTopic[] = [];
    for (let i = 1; i <= size; i += 1) {
      topics.push({
        text: values[`topic-${i}-text`],
        amount: values[`topic-${i}-amount`],
        unit: values[`topic-${i}-unit`]
      });
    }
    setTopics(topics);
  });

  const addTopic = useCallback(() => {
    setSize(prevState => prevState + 1);
  }, []);

  return (
    <Box as="form" onSubmit={onSubmit} px={2}>
      {createArrayWithNumbers(size).map(idx => {
        const topicId = `topic-${idx}`;
        const topicText = `${topicId}-text`;
        const topicAmount = `${topicId}-amount`;
        const topicUnit = `${topicId}-unit`;
        return (
          <Card key={topicId} my={2} bg="white">
            <Flex flexWrap="wrap" px={2} py={2}>
              <Box width={[1, 1 / 2]} pr={[0, 2]}>
                <Label htmlFor={topicText}>Name</Label>
                <Input
                  id={topicText}
                  name={topicText}
                  placeholder="Topic Text Goes Here"
                  data-idx={idx}
                  type="text"
                  ref={register}
                />
              </Box>
              <Box width={[1, 1 / 4]} px={[0, 2]} py={[2, 0]}>
                <Label htmlFor={topicAmount}>Amount</Label>
                <Input
                  id={topicAmount}
                  name={topicAmount}
                  defaultValue="0"
                  type="number"
                  data-idx={idx}
                  ref={register}
                />
              </Box>
              <Box width={[1, 1 / 4]} px={[0, 2]} py={[2, 0]}>
                <Label htmlFor={topicUnit}>Unit</Label>
                <Select
                  id={topicUnit}
                  name={topicUnit}
                  defaultValue={capitalize(TemporalUnit.MINUTES)}
                  data-idx={idx}
                  ref={register}
                >
                  {Object.keys(TemporalUnit).map(unit => (
                    <option key={unit.toLowerCase()}>{capitalize(unit)}</option>
                  ))}
                </Select>
              </Box>
            </Flex>
          </Card>
        );
      })}
      <Flex flexWrap="wrap" py={2}>
        <Text pb={2} width={1}>
          Leave the name field blank to have the builder ignore a topic.
        </Text>
        <Box width={[1, "auto"]}>
          <Button onClick={addTopic} type="button" width={[1, "auto"]}>
            Add Topic
          </Button>
        </Box>
        <Box pl={[0, 2]} py={[2, 0]} width={[1, "auto"]}>
          <Button onClick={onSubmit} width={[1, "auto"]}>
            Submit
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default TopicsBuilderForm;
