import { Row, Col, Button, Input, Divider, Form, Typography } from "antd";
import { useContext } from "react";
import { LabelContext } from "../context/label/LabelContext";

interface modalCreate {
  onCancel: () => void;
}

const CreateEtiqueta = ({ onCancel }: modalCreate) => {
  const [form] = Form.useForm();

  const { createlabels, getLabel } = useContext(LabelContext);

  const onCreateLabels = (value) => {
    let variable = {
      id: Math.floor(Math.random() * 100000) + 1,
      name: value.name,
    };

    createlabels(variable);

    onCancel();
  };

  return (
    <Form form={form} onFinish={onCreateLabels}>
      <Row>
        <Col span={24}>
          <Typography.Text>Nombre de la etiqueta</Typography.Text>

          <Form.Item
            name="name"
            rules={[{ required: true, message: "Campo requerido" }]}
          >
            <Input placeholder="Ingrese nueva etiqueta" />
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
            onClick={onCancel}
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
  );
};

export default CreateEtiqueta;
