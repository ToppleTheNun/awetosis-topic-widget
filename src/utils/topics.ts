import { FormTopic, Topic } from "../types";
import { stringToTemporalUnit } from "./temporalUnits";

export const topicsToFormTopics = (topics: Topic[]): FormTopic[] => {
  return topics.map<FormTopic>((topic) => ({
    text: topic.text,
    amount: `${topic.amount}`,
    unit: topic.unit,
  }));
};

export const formTopicsToTopics = (formTopics: FormTopic[]): Topic[] => {
  return formTopics.map<Topic>((formTopic) => ({
    text: formTopic.text,
    amount: Number(formTopic.amount),
    unit: formTopic.unit,
  }));
};

export const parseJsonStringToTopics = (base64Str: string | null): Topic[] => {
  try {
    const mightBeStr = atob(base64Str ?? "");
    const mightBeTopicArray = JSON.parse(mightBeStr ?? "[]");
    if (!Array.isArray(mightBeTopicArray)) {
      return [];
    }
    return mightBeTopicArray
      .filter((mightBeTopic) => mightBeTopic.text && mightBeTopic.amount)
      .map<Topic>((mightBeTopic) => ({
        text: mightBeTopic.text,
        amount: Number(mightBeTopic.amount),
        unit: stringToTemporalUnit(mightBeTopic.unit),
      }));
  } catch (e) {
    return [];
  }
};
