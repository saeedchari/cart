import Button from "../../components/UI/Button/Button";
import Col from "../../components/UI/Col/Col";
import Container from "../../components/UI/Container/Container";
import Input from "../../components/UI/Input/Input";
import Row from "../../components/UI/Row/Row";
import Link from "next/link";
import { useFormik } from "formik";
import { errorsFormik } from "../../utils/errorsFormik";
import Alert from "../../components/UI/Alert/Alert";

const login = () => {
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: { username: "", password: "" },
    validate: (values) => {
      const errors = {};

      if (!values.username) {
        errors.username = "لطفا نام کاربری خود را وارد نمایید";
      }

      if (!values.password) {
        errors.password = "لطفا کلمه عبور خود را وارد نمایید";
      }

      return errors;
    },
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const errorsForm = errorsFormik(errors);

  return (
    <section className="auth">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className="auth-wrapper">
              {errorsForm.length > 0 && <Alert>{errorsForm}</Alert>}
              <form onSubmit={handleSubmit}>
                <Input
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  placeholder="نام کاربری . . ."
                />
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="کلمه عبور . . ."
                />
                <Button type="submit">ثبت نام</Button>
              </form>
              <p>
                حساب کاربری ندارید؟
                <Link href={"/auth/register"}>ثبت نام</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default login;
