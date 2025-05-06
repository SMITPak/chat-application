import React, { useState } from "react";
import {
  LockOutlined,
  UserOutlined,
  UserSwitchOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { InputFields } from "../form/input";
import { supabase } from "../../config/url";
import toast, { Toaster } from "react-hot-toast";

const FormPage = () => {
  const [form] = Form.useForm();
  const [formState, setFormState] = useState("Sign Up");
  const handleClick = () => {
    formState == "Sign Up" ? setFormState("Sign In") : setFormState("Sign Up");
  };

  const onFinish = async (values) => {
    if (formState == "Sign Up") {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
          options: {
            data: {
              full_name: `${values.firstName} ${values.lastName}`,
            },
          },
        });
        if (data.user != null) {
          form.resetFields();
          setFormState("Sign In");
        } else {
          toast.error(error.message);
        }
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });
        if (data.user != null) {
        } else {
          toast.error(error.message);
        }
      } catch (err) {
        toast.error(err.message);
      }
    }
  };
  return (
    <>
      <p className="font-semibold text-lg captalize text-gray-600">
        Please {formState}
      </p>
      <Form
        name="login"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ margin: 0, padding: 0 }}
      >
        {formState == "Sign Up" && (
          <>
            <InputFields
              name={"firstName"}
              icon={<UserOutlined />}
              placeholder={"Firstname"}
            />
            <InputFields
              name={"lastName"}
              icon={<UserSwitchOutlined />}
              placeholder={"LastName"}
            />
          </>
        )}

        <InputFields
          name={"email"}
          icon={<MailOutlined />}
          placeholder={"Email"}
          type={"email"}
        />

        <Form.Item name="password" rules={[{ required: true, message: "" }]}>
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {formState == "Sign Up" && (
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(""));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
        )}
        <Form.Item style={{ margin: 0, padding: 0 }}>
          <Button block type="primary" htmlType="submit">
            {formState}
          </Button>
        </Form.Item>
        <p onClick={handleClick} className="mt-2 text-blue-500 cursor-pointer">
          {formState == "Sign Up" ? "Sign In" : "Sign Up"}
        </p>
      </Form>
    </>
  );
};
export default FormPage;
