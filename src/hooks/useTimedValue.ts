import { useCallback, useState } from "react";

const useTimedValue = (
  defaultValue: string,
  temporaryValue: string,
  duration: number
) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = useCallback(() => {
    setValue(temporaryValue);
    setTimeout(() => {
      setValue(defaultValue);
    }, duration);
  }, [defaultValue, duration, temporaryValue]);

  // return value;
  return { value, toggleValue };
};

export default useTimedValue;
