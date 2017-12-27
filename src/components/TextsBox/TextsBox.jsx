import React from "react";
import injectSheet from "react-jss";
//import PlayCircleOutline from "material-ui-icons/PlayCircleOutline";

const styles = theme => ({
  root: {
    color: "#fff",
    fontSize: "1em",
    padding: "1em 2em",
    width: "100%"
  },
  entry: {
    "& h1": {
      fontSize: "2.8em",
      fontWeight: 300,
      letterSpacing: "-.02em",
      margin: 0
    }
  },
  meta: {
    margin: ".5em 0",
    fontSize: "1.1em",
    color: "#999"
  },
  metaDefinition: {
    color: "#ddd"
  },
  metaType: {
    fontStyle: "italic",
    color: "#aaa"
  },
  sentences: {
    fontSize: "1.4em",
    listStyle: "none",
    margin: "1.2em 0 0 0",
    padding: 0
  }
});

const TextsBox = ({ vocabItem, classes, ...props }) => {
  return (
    <div className={classes.root}>
      <header className={classes.entry}>
        <h1>{vocabItem.entry.text}</h1>
      </header>
      <div className={classes.meta}>
        <span className={classes.metaType}>{vocabItem.meaning.type}</span> •{" "}
        <span className={classes.metaDefinition}>
          {vocabItem.meaning.definition}
        </span>
      </div>
      <ul className={classes.sentences}>
        {vocabItem.sentences.map(sentence => (
          <li key={sentence.id}>{sentence.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default injectSheet(styles)(TextsBox);
