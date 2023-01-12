import { useContext, useEffect, useState } from "react";
import { HomeworkContext } from "../context/homework/HomeWorkContext";
import { Row, Col, Button } from "antd";
import Filters from "../components/home/Filters";
import Table from "../components/home/Table";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //Initial Context
  const { data, getTask } = useContext(HomeworkContext);
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState([]);
  const [filterText, setFilterText] = useState({
    state: null,
    label: "",
    dateTime: "",
  });

  const TableData = (data) => {
    let tableData: any = [];
    data.forEach((i: any) => {
      tableData.push({
        id: i.id,
        description: i.description,
        finishDate: i.finishDate,
        state: i.state,
        label: i.label,
      });
    });
    return tableData;
  };

  const onSearchs = (value) => {
    let filters = [];
    if (value === "") {
      filters = TableData(data);
    } else {
      filters = TableData(data).filter(
        (u) =>
          u.id === value ||
          u.label.filter((label) => label.includes(value)).length
      );
    }
    setDataSource(filters);
  };

  const onFilterState = (value) => {
    let filters = [];
    if (value === null) {
      filters = TableData(data);
    } else {
      filters = TableData(data).filter((u) => u.state === value);
    }
    setDataSource(filters);
  };

  useEffect(() => {
    getTask();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setDataSource(TableData(data));
  }, [data]);

  useEffect(() => {
    onSearchs(filterText.label);
    // eslint-disable-next-line
  }, [filterText.label]);

  useEffect(() => {
    onFilterState(filterText.state);
    // eslint-disable-next-line
  }, [filterText.state]);

  return (
    <Row gutter={[8, 9]}>
      <Col span={16}>
        <Filters setFilterText={setFilterText} filterText={filterText} />
      </Col>
      <Col span={8}>
        <Button
          onClick={() => navigate("/formTask")}
          size="small"
          type="primary"
          style={{ width: "100%" }}
        >
          Crear
        </Button>
      </Col>

      <Col span={24}>
        <Table dataSource={dataSource} />
      </Col>
    </Row>
  );
};

export default Home;
