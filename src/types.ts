import { ChangeEvent } from "react";

export enum TemporalUnit {
  MILLISECONDS = "MILLISECONDS",
  SECONDS = "SECONDS",
  MINUTES = "MINUTES",
  HOURS = "HOURS"
}

export type FormTopic = {
  text: string;
  amount: string;
  unit: TemporalUnit;
};

export type FormChangeHandler = (
  event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
) => void;
