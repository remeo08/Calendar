import React from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

const SignupContainer = styled.div`
  width: 900px;
  height: 800px;
  border: 1px solid black;
  text-align: center;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-contents: center;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 280px;
  height: 30px;
  margin-bottom: 15px;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const ErrorMessage = styled.small`
  color: red;
  font-size: 12px;
  width: 280px;
  margin-left: 50px;
  margin-top: -10px;
  margin-bottom: 15px;
`;

const Signup = ({
  onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  },
}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
    getValues,
  } = useForm();

  return (
    <SignupContainer>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <Label htmlFor="id">아이디</Label>
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
        </Wrapper>{' '}
        {errors.id && (
          <ErrorMessage role="alert">{errors.id.message}</ErrorMessage>
        )}
        <Wrapper>
          <Label htmlFor="password">비밀번호</Label>
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
        </Wrapper>
        {errors.password && (
          <ErrorMessage role="alert">{errors.password.message}</ErrorMessage>
        )}
        <Wrapper>
          <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
          <input
            id="passwordConfirm"
            type="password"
            aria-invalid={
              isSubmitted
                ? errors.passwordConfirm
                  ? 'true'
                  : 'false'
                : undefined
            }
            {...register('passwordConfirm', {
              required: '비밀번호 확인은 필수 입력입니다.',
              minLength: {
                value: 7,
                message: '7자리 이상 비밀번호를 사용하세요.',
              },
              validate: {
                check: (val) => {
                  if (getValues('password') !== val) {
                    return '비밀번호가 일치하지 않습니다.';
                  }
                },
              },
            })}
          />
        </Wrapper>
        {errors.passwordConfirm && (
          <ErrorMessage role="alert">
            {errors.passwordConfirm.message}
          </ErrorMessage>
        )}
        <Wrapper>
          <Label htmlFor="email">이메일</Label>
          <input
            id="email"
            type="text"
            placeholder="test@email.com"
            // input의 기본 config를 작성
            {...register('email', {
              required: '이메일은 필수 입력입니다.',
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
          />
        </Wrapper>
        {errors.email && (
          <ErrorMessage role="alert">{errors.email.message}</ErrorMessage>
        )}
        <Wrapper>
          <Label htmlFor="name">이름</Label>
          <input
            id="name"
            type="text"
            aria-invalid={
              isSubmitted ? (errors.name ? 'true' : 'false') : undefined
            }
            {...register('name', {
              required: '아이디는 필수 입력입니다.',
              minLength: {
                value: 2,
                message: '2자리 이상 입력해주세요.',
              },
            })}
          />
        </Wrapper>
        {errors.name && (
          <ErrorMessage role="alert">{errors.name.message}</ErrorMessage>
        )}
        <button type="submit" disabled={isSubmitting}>
          회원가입
        </button>
      </Form>
    </SignupContainer>
  );
};

export default Signup;
