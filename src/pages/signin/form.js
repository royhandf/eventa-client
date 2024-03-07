import { Form } from "react-bootstrap";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

const SForm = ({ form, handleChange, handleSubmit, isLoading }) => {
  return (
    <Form>
      <TextInputWithLabel
        label="Email address"
        name="email"
        type="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      />
      <TextInputWithLabel
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      <SButton
        variant="primary"
        type="submit"
        action={handleSubmit}
        loading={isLoading}
        disabled={isLoading}
      >
        Sign in
      </SButton>
    </Form>
  );
};

export default SForm;
