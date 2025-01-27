import React from "react";

export const ReactMemo = React.memo(({ task }) => {
  console.log("Rendering task:", task);
  return (
    <div
      style={{
        marginTop: "8px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      {task}
    </div>
  );
});
