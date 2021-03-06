import React, { useEffect, useState } from "react";
import { Box, Heading } from "rebass";

import orcFace from "../../../assets/orc_face.png";
import { DisplayTopic } from "../../../types";
import { temporalUnitAndAmountToSeconds } from "../../../utils/temporalUnits";

type TopicCountdownProps = {
  currentTopic: DisplayTopic | null;
  markCurrentTopicAsCompleted: () => void;
};

const TopicCountdown: React.FC<TopicCountdownProps> = ({
  currentTopic,
  markCurrentTopicAsCompleted
}) => {
  const [seconds, setSeconds] = useState(-1);

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(seconds => {
        if (seconds < 0) {
          return seconds;
        }
        if (seconds === 0) {
          markCurrentTopicAsCompleted();
          return seconds;
        }
        return seconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [markCurrentTopicAsCompleted]);

  useEffect(() => {
    const duration = temporalUnitAndAmountToSeconds(
      currentTopic?.amount,
      currentTopic?.unit
    );
    setSeconds(duration);
  }, [currentTopic]);

  if (seconds < 0 || currentTopic === null) {
    return (
      <Box
        bg="eerieBlack"
        px={2}
        py={2}
        sx={{
          backgroundImage: `url(${orcFace})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
          backgroundSize: "contain"
        }}
      >
        <Heading color="lightText">No Current Topics</Heading>
      </Box>
    );
  }
  return (
    <Box
      bg="eerieBlack"
      px={2}
      py={2}
      sx={{
        backgroundImage: `url(${orcFace})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        backgroundSize: "contain"
      }}
    >
      <Heading color="lightText">{seconds}s Remaining</Heading>
    </Box>
  );
};

export default TopicCountdown;
