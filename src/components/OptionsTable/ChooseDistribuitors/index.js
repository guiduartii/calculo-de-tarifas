import React, { Component } from "react";
import { Select } from "antd";
import "./chooseDistribuitors.less";

class chooseDistribuitors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      powerDistribuitorId: ''
    };
  }

  componentDidMount() {
    this.props.listDistribuitors();
    this.setState({
      powerDistribuitorId: this.props.itemsDistribuitors[1].id
    })
  }

  handleChange = value => {

    const {itemsEquipments} = this.props;
    this.setState({ powerDistribuitorId: value });
   //console.log(`Selected ${value}`);
    localStorage.setItem("powerDistribuitorId", value);
    //console.log(localStorage.getItem("powerDistribuitorId"));
    this.props.listCalculateEquipments(itemsEquipments, value);
  };

  renderOptions() {
    const { Option } = Select;
    const { itemsDistribuitors } = this.props;
    return itemsDistribuitors.map(item => (
      <Option key={item.id} value={item.id}>
        {item.name}
      </Option>
    ));
  }

  defaultValue = () => {
    const {itemsDistribuitors} = this.props;
    const powerDistribuitorId = localStorage.getItem('powerDistribuitorId');

    if(powerDistribuitorId) {
      return powerDistribuitorId
    } else {
      return itemsDistribuitors[0].id
    }
  };

  render() {
    return (
      <div className="content-select">
        <i className="label-distribuitors">Concessionárias</i>
        <Select
          showSearch
          style={{ width: 200 }}
          optionFilterProp="children"
          defaultValue={this.defaultValue()}
          onChange={this.handleChange}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0}
        >
          {this.renderOptions()}
        </Select>
      </div>
    );
  }
}

export default chooseDistribuitors;
