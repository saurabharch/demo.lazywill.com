import React from "react";
import injectSheet from "react-jss";
import Hammer from "react-hammerjs";
import TextField from "material-ui/TextField";
import Color from "color";

import { LOGOS } from "../../constants/logos";
import SvgEl from "../shared/SvgEl";
import BlockButton from "../shared/BlockButton";

const styles = theme => ({
  root: {
    bottom: "60px",
    color: "#fff",
    left: 0,
    overflow: "auto",
    position: "absolute",
    right: 0,
    top: 0
  },
  logo: {
    display: "inline-block",
    width: "80px",
    verticalAlign: "middle",
    margin: "6px 5px 0 0"
  },
  textBox: {
    padding: "3em",
    maxWidth: "30em",
    marginLeft: "auto",
    marginRight: "auto",
    "& p": {
      lineHeight: "1.4em",
      fontSize: "1.1em"
    },
    "& b": {
      fontWeight: 600
    },
    "& a": {
      color: theme.palette.primary["500"],
      textDecoration: "none",
      fontWeight: 600
    }
  },
  head: {
    fontWeight: 300,
    margin: 0
  },
  subHead: {
    fontSize: "1.2em",
    margin: 0
  },
  avatar: {
    display: "inline-block",
    height: "30px",
    margin: "-.2em 0 0 .5em",
    verticalAlign: "middle",
    width: "30px"
  },
  submitButton: {
    background: theme.palette.background.first,
    margin: "1em 0",
    "&:hover": {
      background: Color(theme.palette.background.first)
        .darken(0.2)
        .string()
    }
  },
  inputInkbar: {
    "&:after": {
      backgroundColor: theme.palette.primary[500]
    }
  },
  labelShrink: {
    color: theme.palette.primary[500]
  }
});

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("form submited");
    event.preventDefault();

    fetch("http://subscription.lazywill.com/mailster/subscribe", {
      method: "POST",
      body: {
        formid: 1,
        email: this.state.email,
        _nonce: "d1b3e2f10d"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate",
        "Content-Type": "application/x-www-form-urlencoded"
        "X-Requested-With": "XMLHttpRequest"
      }
    }).then(function(response) {
      console.log(response);
    });
  };

  handleSwipe() {
    this.props.history.push("/browse");
  }

  render() {
    const { classes } = this.props;

    return (
      <Hammer onSwipeRight={this.handleSwipe}>
        <div className={classes.root}>
          <div className={classes.textBox}>
            <h2 className={classes.subHead}>Subscribe to</h2>
            <h1 className={classes.head}>
              <span className={classes.logo}>
                <SvgEl svg={LOGOS.MAIN} />
              </span>
              Newsletter@
            </h1>
            <p>Do you like what you've seen?</p>
            <p>
              Unfortunately, that's all what I can show you for now. The app is
              still in development.{" "}
            </p>
            <p>
              Subscribe to the Newsletter and I will inform your about the
              progress of work.
            </p>
            <p>
              Do not miss your chance to try out the app as one of the firsts.
            </p>
            <form onSubmit={this.handleSubmit}>
              <TextField
                onChange={this.handleChange("email")}
                label="e-mail address"
                value={this.state.email}
                type="email"
                required={true}
                fullWidth
                InputProps={{
                  classes: {
                    inkbar: classes.inputInkbar
                  }
                }}
                InputLabelProps={{
                  classes: {
                    shrink: classes.labelShrink
                  }
                }}
              />
              <BlockButton
                type="submit"
                classes={{
                  root: classes.submitButton
                }}
              >
                Subscribe
              </BlockButton>
            </form>
          </div>
        </div>
      </Hammer>
    );
  }
}

export default injectSheet(styles)(Subscribe);
