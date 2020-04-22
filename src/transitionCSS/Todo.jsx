import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./Todo.scss";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ["hello", "world", "click", "me"] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([prompt("Enter some text")]);
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <CSSTransition
        key={i}
        classNames="example"
        timeout={{ enter: 500, exit: 300 }}
      >
        <div onClick={() => this.handleRemove(i)}>{item}</div>
      </CSSTransition>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <TransitionGroup>{items}</TransitionGroup>
      </div>
    );
  }
}

export default TodoList;
