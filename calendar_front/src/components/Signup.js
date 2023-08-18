import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'https://port-0-calendar-backend-ac2nll4pdsc1.sel3.cloudtype.app/api/v1/users/signup/',
        {
          username: data.id,
          name: data.name,
          password: data.password,
          email: data.email,
        },
      );
      console.log(response.data);
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  const [isIdAvailable, setIsIdAvailable] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
    getValues,
  } = useForm();

  const checkIdAvailability = async () => {
    const id = getValues('id');

    try {
      const response = await axios.post(
        'https://port-0-calendar-backend-ac2nll4pdsc1.sel3.cloudtype.app/api/v1/users/idcheck/',
        {
          username: id,
        },
      );
    } catch (error) {
      console.error('중복확인 실패:', error);
    }

    console.log(id);
  };

  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>회원가입</h1>

            <div>아이디</div>
            <input
              id="id"
              type="text"
              // placeholder="아이디"
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
            <div onClick={checkIdAvailability}>중복확인</div>
            {isIdAvailable === false && (
              <small role="alert">이미 사용 중인 아이디입니다.</small>
            )}
            {/* {' '} */}
            {errors.id && <div role="alert">{errors.id.message}</div>}

            <div>비밀번호</div>
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
              <div role="alert">{errors.password.message}</div>
            )}

            <div>비밀번호 확인</div>
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

            {errors.passwordConfirm && (
              <div role="alert">{errors.passwordConfirm.message}</div>
            )}

            <div>이메일</div>
            <input
              id="email"
              type="text"
              placeholder="test@email.com"
              {...register('email', {
                required: '이메일은 필수 입력입니다.',
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: '이메일 형식에 맞지 않습니다.',
                },
              })}
            />

            {errors.email && <div role="alert">{errors.email.message}</div>}

            <div>이름</div>
            <input
              id="name"
              type="text"
              aria-invalid={
                isSubmitted ? (errors.name ? 'true' : 'false') : undefined
              }
              {...register('name', {
                required: '이름은 필수 입력입니다.',
                minLength: {
                  value: 2,
                  message: '2자리 이상 입력해주세요.',
                },
              })}
            />

            {errors.name && <div role="alert">{errors.name.message}</div>}
            <button type="submit" disabled={isSubmitting}>
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
