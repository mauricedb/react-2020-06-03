import React, { Component } from "react";

class PersonEditor extends Component {
  state = { firstName: "Max", lastName: "Verstappen" };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div>
        <div>
          <label>
            Firstname:
            <input
              name="firstName"
              value={firstName}
              onChange={this.onChange}
            />
          </label>
        </div>
        <div>
          <label>
            Lastname:
            <input name="lastName" value={lastName} onChange={this.onChange} />
          </label>
        </div>
      </div>
    );
  }
}

export default PersonEditor;
