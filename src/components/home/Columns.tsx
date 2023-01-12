import React from "react";
import { Typography } from "antd";

const Columns = () => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "descripcion",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "fecha de terminación",
      dataIndex: "finishDate",
      key: "finishDate",
    },
    {
      title: "Estado",
      dataIndex: "state",
      key: "state",
      render: (text) => (
        <Typography.Text>
          {text === true ? "Terminado" : "Pendiente"}
        </Typography.Text>
      ),
    },
    {
      title: "Etiqueta",
      dataIndex: "label",
      key: "label",
    },
  ];

  return columns;
};

export default Columns;
