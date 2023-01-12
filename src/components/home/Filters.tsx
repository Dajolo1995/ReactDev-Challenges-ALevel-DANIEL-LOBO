import React from "react";
import { Row, Col, DatePicker, Input, Select } from "antd";
import type { DatePickerProps } from "antd";
const { Option } = Select;

const Filters = ({ setFilterText, filterText }) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setFilterText({
      state: null,
      label: "",
      dateTime: dateString,
    });
  };
  return (
    <Row>
      <Col span={12}>
        <Input
          size="small"
          placeholder="Etiquetas"
          style={{ width: "98%" }}
       
          onChange={(e) => {
            setFilterText({
              state: null,
              label: e.target.value,
              dateTime: "",
            });
          }}
        />
      </Col>

      <Col span={12}>
        <Select
          size="small"
          placeholder="Estado"
          style={{ width: "98%" }}

          onChange={(value) => {
            setFilterText({
              state: value,
              label: "",
              dateTime: "",
            });
          }}
        >
          <Option value={true}>Finalizado</Option>
          <Option value={false}>Pendiente</Option>
          <Option value={null}>Todos</Option>
        </Select>
      </Col>


    </Row>
  );
};

export default Filters;
