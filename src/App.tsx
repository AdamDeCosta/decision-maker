import React, { useState } from "react";
import "./App.css";
import QuestionInput from "./components/QuestionInput";
import ChoiceList from "./components/ChoiceList";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

const App: React.FC = () => {
  const [decision, setDecision] = useState<string | undefined>("");

  const showDecision = (decision: string | undefined) => {
    setDecision(decision);
  };

  return (
    <div className="App">
      <header className="header">
        <Typography variant="h1">Decision Maker</Typography>
        <Typography variant="subtitle1">
          Use any time you need to make a decision.
        </Typography>
      </header>
      <Fade
        style={{ transitionDelay: decision ? "300ms" : "0ms" }}
        mountOnEnter
        unmountOnExit
        in={decision ? true : false}
      >
        <Container maxWidth="sm" component="main" style={{ marginTop: "50px" }}>
          <Typography align="center" variant="body1">
            {decision}
          </Typography>
          <Button onClick={() => setDecision("")} color="primary">
            New Question
          </Button>
        </Container>
      </Fade>
      <Fade
        style={{ transitionDelay: decision ? "0ms" : "300ms" }}
        mountOnEnter
        unmountOnExit
        in={!decision}
      >
        <Container maxWidth="sm" component="main" className="container">
          <QuestionInput />
          <ChoiceList onDecide={showDecision} />
        </Container>
      </Fade>
    </div>
  );
};

export default App;
