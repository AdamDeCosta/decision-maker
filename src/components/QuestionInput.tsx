import React from "react";
import { TextField } from '@material-ui/core';

const QuestionInput: React.FC = () => {
  return (
    <TextField fullWidth autoFocus label="Question" placeholder="Enter question..." />
  );
};

export default QuestionInput;
