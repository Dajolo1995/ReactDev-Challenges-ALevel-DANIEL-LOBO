import React, { useState, useContext } from "react";
import Columns from "./Columns";
import PopUp from "./PopUp";
import { Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { idTask } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { HomeworkContext } from "../../context/homework/HomeWorkContext";

interface tableInterface {
  dataSource: any;
}

const dataTable = ({ dataSource }: tableInterface) => {
  const { getTaskId, deleteTasks } = useContext(HomeworkContext);

  const [menuContext, setMenuContext] = useState({
    popup: {
      record: [],
      visible: false,
      x: 0,
      y: 0,
    },
  });

  const [stateRecord, setStateRecord] = useState({});

  const onRow = (record: any) => ({
    onContextMenu: (event: any) => {
      event.preventDefault();
      if (!menuContext.popup.visible) {
        document.addEventListener(`click`, function onClickOutside() {
          setMenuContext({
            popup: { record: [], visible: false, x: 0, y: 0 },
          });
          document.removeEventListener(`click`, onClickOutside);
        });
      }
      setMenuContext({
        popup: {
          record,
          visible: true,
          x: event.clientX,
          y: event.clientY,
        },
      });

      setStateRecord(record);
    },
  });

  const navigate = useNavigate();

  return (
    <>
      <Table
        columns={Columns()}
        dataSource={dataSource}
        size="small"
        onRow={(record: any) => onRow(record)}
      />

      <PopUp
        {...menuContext.popup}
        options={[
          {
            click: () => {
              idTask(stateRecord.id);
              getTaskId(stateRecord.id);
              navigate("/formTask");
            },
            title: "Editar",
            icon: <EditOutlined />,
            permissions: true,
            color: "#4096FF",
          },
          {
            click: () => {
              deleteTasks(stateRecord.id);
            },
            title: "Eliminar",
            icon: <DeleteOutlined />,
            permissions: true,
            color: "red",
          },
        ]}
      />
    </>
  );
};

export default dataTable;
