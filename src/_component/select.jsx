import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [
        "Jakarta",
        "Bogor",
        "Depok",
        "Tangerang",
        "Bekasi",
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    window.alert(event.target.value);
  }

  render() {
    const item = this.props.item || this.state.item
    return (
      <div>
        <select onChange={this.handleChange}>
          {
            item.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              )
            })
          }
        </select>
      </div>
    )
  }
}

export default Select;