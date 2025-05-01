import { Form, Input } from "antd"


export const InputFields = ({ name, icon, placeholder, type }) => {
    return (
        <Form.Item
        
            name={name}
            rules={[{ required: true, message: '' }]}
        >
            <Input prefix={icon} placeholder={placeholder} type={type ? type : 'text'} />
        </Form.Item>
    )
}