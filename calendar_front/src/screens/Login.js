import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

const LoginContainer = styled.div`
  width: 400px;
  height: 800px;
  border: 1px solid black;
  display: flex;
  align-item: center;
`;

const Login = ({
  onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  },
}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">아이디</label>
        <input
          id="id"
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
        <input
          id="password"
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
      </form>
    </LoginContainer>
  );
};

export default Login;
