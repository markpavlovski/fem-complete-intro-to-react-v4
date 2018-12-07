const Pet = props => {
  const { name, animal, breed } = props;
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("Clicked on title");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Dan",
        animal: "Dog",
        breed: "greyhound"
      }),
      React.createElement(Pet, {
        name: "Dan",
        animal: "Dog",
        breed: "greyhound"
      })
    ]);
  }
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.querySelector("#root")
);
