import React, { useMemo } from "react";

export const UseMemo = ({ count, counter }) => {
  return (
    <div style={{ marginTop: "16px" }}>
      <p>Total tasks: {count}</p>
      <p>Counter value: {counter}</p>
    </div>
  );
};
