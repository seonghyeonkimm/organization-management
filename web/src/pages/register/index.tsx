import "@/assets/scss/pages/_register.scss";

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import { ConnectProps } from "@/@types/types";
import { register } from "@/actions";

interface States {
  email: string;
  companyName: string;
  password: string;
  passwordCheck: string;
}

class Page extends PureComponent<ConnectProps, States>  {
  public state: States = {
    companyName: "",
    email: "",
    password: "",
    passwordCheck: "",
  };

  public render() {
    return (
      <Container className="register">
        <Form onSubmit={this.onSubmit}>
          <h1>회원가입</h1>
          <FormGroup>
            <Label>이메일</Label>
            <Input
              type="email"
              name="email"
              placeholder="이메일 입력"
              onChange={this.onChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>회사명</Label>
            <Input
              type="text"
              name="companyName"
              placeholder="회사명 입력"
              onChange={this.onChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>비밀번호</Label>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호 입력"
              onChange={this.onChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>비밀번호 확인</Label>
            <Input
              type="password"
              name="passwordCheck"
              placeholder="비밀번호 확인 입력"
              onChange={this.onChange}
              required
            />
          </FormGroup>
          <Button type="submit" color="primary" block>
            회원가입하기
          </Button>
          <Link to="/login">로그인 하러 가기</Link>
        </Form>
      </Container>
    );
  }

  private onChange = (e: React.ChangeEvent): void => {
    e.stopPropagation();

    const { name, value }: any = e.target;
    this.setState({ [name]: value } as Pick<States, keyof States>);
  }

  private onSubmit = async (e: React.FormEvent): Promise<string> => {
    e.preventDefault();
    const {
      email,
      companyName,
      password,
      passwordCheck,
    } = this.state;
    const { dispatch, history } = this.props;

    const postData = {
      company_name: companyName,
      email,
      password,
      passwordCheck,
    };

    await dispatch(register(postData));
    history.push("/login");
    return;
  }

}

const mapStateToProps = () => ({});
export default withRouter(connect(mapStateToProps)(Page) as any);
