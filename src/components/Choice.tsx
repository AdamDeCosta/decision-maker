import React from "react";
import { ListItem, TextField } from "@material-ui/core";

interface Choice {
  content: string;
  number: number;
  onChange: (idx: number, value: string) => void;
}

const Choice: React.FC<Choice> = ({ content, number, onChange }) => {
  return (
      <TextField
        fullWidth
        label={`Option ${number + 1}`}
        value={content}
        onChange={({ target: { value } }) => onChange(number, value)}
      />
  );
};

export default Choice;
