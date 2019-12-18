import React, { useState } from "react";
import Choice from "./Choice";
import {
  List,
  ListSubheader,
  ListItem,
  Button,
  Container
} from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Done from "@material-ui/icons/Done";
import "./ChoiceList.css";
import _ from 'lodash';

interface ChoiceList {
  onDecide: (decision: string | undefined) => any;
}

const ChoiceList: React.FC<ChoiceList> = ({ onDecide }) => {
  const [choices, setChoices] = useState(["", ""]);

  const onChange = (idx: number, value: string): void => {
    setChoices(Object.assign([...choices], { [idx]: value }));
  };

  const addChoice = () => setChoices([...choices, ""]);

  return (
    <>
      <List subheader={<ListSubheader>Choices</ListSubheader>}>
        {choices.map((content, idx) => (
          <ListItem key={idx}>
            <Choice number={idx} content={content} onChange={onChange} />
          </ListItem>
        ))}
      </List>
      <Container className="list--container">
        <Button onClick={addChoice} color="primary" startIcon={<Add />}>
          Add Option
        </Button>
        <Button onClick={() => onDecide(_.sample(choices))} startIcon={<Done />}>
          Make Decision
        </Button>
      </Container>
    </>
  );
};

export default ChoiceList;
