import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import Signup from './Signup';
import axios from 'axios';

const Container = styled.div`
  // width: 400px;
  // height: 500px;
  // border: 1px solid black;
  // display: flex;
  // align-item: center;
`;

const LoginContainer = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid black;
  display: flex;
  align-item: center;
`;

const Input = styled.input`
  &:focus {
    border-color: blue;
    outline: none;
  }
`;

const Form = styled.div``;

const Login = () => {
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'https://port-0-calendar-backend-ac2nll4pdsc1.sel3.cloudtype.app/api/v1/users/login/',
        data,
      ); // 서버로 로그인 요청 보내기
      console.log(response.data); // 서버 응답 데이터 출력
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();

  return (
    <Container>
      <LoginContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="id">아이디</label>
          <Input
            className="id"
            type="text"
            aria-invalid={
              isSubmitted ? (errors.id ? 'true' : 'false') : undefined
            }
            {...register('id', {
              required: '아이디는 필수 입력입니다.',
              minLength: {
                value: 4,
                message: '4자리 이상 입력해주세요.',
              },
            })}
          />
          {errors.id && <small role="alert">{errors.id.message}</small>}
          <label htmlFor="password">비밀번호</label>
          <Input
            className="password"
            type="password"
            aria-invalid={
              isSubmitted ? (errors.password ? 'true' : 'false') : undefined
            }
            {...register('password', {
              required: '비밀번호는 필수 입력입니다.',
              minLength: {
                value: 7,
                message: '7자리 이상 비밀번호를 사용하세요.',
              },
            })}
          />
          {errors.password && (
            <small role="alert">{errors.password.message}</small>
          )}
          <button type="submit" disabled={isSubmitting}>
            로그인
          </button>
        </Form>
      </LoginContainer>
      <Signup></Signup>
    </Container>
  );
};

export default Login;
