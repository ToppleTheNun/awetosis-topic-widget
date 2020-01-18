import { ChangeEvent } from "react";

export enum TemporalUnit {
  SECONDS = "SECONDS",
  MINUTES = "MINUTES",
  HOURS = "HOURS"
}

export type FormTopic = {
  text: string;
  amount: string;
  unit: TemporalUnit;
};

export type Topic = {
  text: string;
  amount: number;
  unit: TemporalUnit;
};

export type DisplayTopic = {
  id: number;
  complete: boolean;
} & Topic;

export type FormChangeHandler = (
  event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
) => void;
