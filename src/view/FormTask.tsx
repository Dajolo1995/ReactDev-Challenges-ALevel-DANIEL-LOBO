import React, { useState, useContext, useEffect } from "react";
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Select,
  Typography,
  Modal,
  DatePicker,
  Divider,
} from "antd";
import { useNavigate } from "react-router-dom";
import CreateEtiqueta from "./CreateEtiqueta";
import { LabelContext } from "../context/label/LabelContext";
import { HomeworkContext } from "../context/homework/HomeWorkContext";
import type { DatePickerProps } from "antd";
import { getIdTaskId } from "../utils/utils";

const { Option } = Select;
const { TextArea } = Input;

const FormTask = () => {
  //form
  const [form] = Form.useForm();

  //Navigate
  const navigate = useNavigate();
  //context
  const { data, getLabel } = useContext(LabelContext);
  const { createTask, updateTask, dataId } = useContext(HomeworkContext);
  //state
  const [dataSource, setDataSource] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [date, setDate] = useState("");
  const [openModalState, setStateOpenModal] = useState({
    title: "",
    visible: false,
  });

  const [initialValues, setInitialValues] = useState({
    id: dataId?.id !== null || dataId?.id !== undefined ? dataId?.id : 0,
    description:
      dataId?.description !== null || dataId?.description !== undefined
        ? dataId?.description
        : "",

    finishDate:
      dataId?.finishDate !== null || dataId?.finishDate !== undefined
        ? dataId?.finishDate
        : "",

    label:
      dataId?.label !== null || dataId?.label !== undefined
        ? dataId?.label
        : [],
    state:
      dataId?.state !== null || dataId?.state !== undefined
        ? dataId?.state
        : false,
  });

  //useEffect
  useEffect(() => {
    getLabel();
  }, []);

  useEffect(() => {
    setDataSource(data);
  }, [data, dataId]);


  // modals open

  const openModals = () => {
    setStateOpenModal({
      title: "Crear Etiqueta",
      visible: true,
    });
  };
  //close modal
  const onCancel = async () => {
    setStateOpenModal({
      title: "",
      visible: false,
    });

    await getLabel();
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(dateString);
  };

  const onCreateTask = (value) => {
    try {
      if (initialValues.id !== undefined) {
        let variable = {
          id: initialValues?.id,
          description: value.description,
          finishDate: date === "" ? dataId?.finishDate : `${date}`,
          state: value.state,
          label: value.label,
        };
  
        updateTask(variable);
      } else {
        let variable = {
          id: Math.floor(Math.random() * 100000) + 1,
          description: value.description,
          finishDate: `${date}`,
          state: value.state,
          label: value.label,
        };

      

        createTask(variable);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        name="register"
        form={form}
        onFinish={onCreateTask}
        wrapperCol={{ span: 24 }}
        initialValues={{
          description: initialValues.description,
          label: initialValues.label,
          state: initialValues.state,
        }}
      >
        <Row gutter={[8, 8]}>
          <Col span={8}>
            <Typography.Text>Estado de la tarea</Typography.Text>

            <Form.Item
              name="state"
              rules={[
                {
                  required: true,
                  message: "Campo requerido",
                },
              ]}
            >
              <Select
                size="small"
                style={{ width: "97%" }}
                onChange={(value) => {
                  setDisabled(value === true ? false : true);
                  setDate("");
                }}
              >
                <Option value={false}>PENDIENTE</Option>
                <Option value={true}>TERMINADO</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Row>
              <Col span={12}>
                <Typography.Text>Etiqueta</Typography.Text>
              </Col>

              <Col span={12}>
                <Button size="small" type="link" onClick={openModals}>
                  Crear Etiquetas
                </Button>
              </Col>
            </Row>

            <Form.Item
              name="label"
              rules={[
                {
                  required: true,
                  message: "Campo requerido",
                },
              ]}
            >
              <Select
                size="small"
                style={{ width: "97%" }}
                mode="multiple"
                maxTagCount={0}
                maxTagPlaceholder={(values: any) =>
                  `+ ${values.length} Seleccionados`
                }
              >
                {dataSource?.map((m: any) => (
                  <Option value={m.name}>{m.name}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Typography.Text>Fecha de terminacion</Typography.Text>

            <Form.Item
              name="finishDate"
              rules={[
                {
                  required: disabled === false ? true : false,
                  message: "Agregue la fecha de finalizacion",
                },
              ]}
            >
              <DatePicker
                placeholder={
                  initialValues.finishDate !== ""
                    ? initialValues.finishDate
                    : ""
                }
                size="small"
                style={{ width: "100%" }}
                disabled={disabled}
                onChange={onChange}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Typography.Text>Descripcion</Typography.Text>

            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: "Campo requerido",
                },
              ]}
            >
              <TextArea
                showCount
                maxLength={200}
                size="small"
                placeholder="Ingrese la descricion"
                rows={4}
              />
            </Form.Item>
          </Col>
          <Divider />
          <Col span={11}>
            <Button
              htmlType="submit"
              size="small"
              style={{ width: "100%" }}
              type="primary"
            >
              Guardar
            </Button>
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <Button
              onClick={() => navigate("/")}
              size="small"
              style={{ width: "100%" }}
              type="primary"
              danger
            >
              Cancelar
            </Button>
          </Col>
        </Row>
      </Form>

      <Modal
        footer=""
        onCancel={onCancel}
        open={openModalState.visible}
        title={openModalState.title}
        destroyOnClose={true}
      >
        <CreateEtiqueta onCancel={onCancel} />
      </Modal>
    </>
  );
};

export default FormTask;
