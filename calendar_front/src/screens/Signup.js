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

// import React, { useState } from 'react';
// // import Button from '../components/lib/button';

// const Signup = () => {
//   const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [birth, setBirth] = useState('');

//   const [idMessage, setIdMessage] = useState('');
//   const [nameMessage, setNameMessage] = useState('');
//   const [passwordMessage, setPasswordMessage] = useState('');
//   const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
//   const [emailMessage, setEmailMessage] = useState('');
//   const [phoneMessage, setPhoneMessage] = useState('');
//   const [birthMessage, setBirthMessage] = useState('');

//   const [isId, setIsId] = useState(false);
//   const [isName, setIsName] = useState(false);
//   const [isPassword, setIsPassword] = useState(false);
//   const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
//   const [isEmail, setIsEmail] = useState(false);
//   const [isPhone, setIsPhone] = useState(false);
//   const [isBirth, setIsBirth] = useState(false);

//   const onChangeId = (e) => {
//     const currentId = e.target.value;
//     setId(currentId);
//     const idRegExp = /^[a-zA-Z0-9]{4,12}$/;

//     if (!idRegExp.test(currentId)) {
//       setIdMessage('4-12사이 대소문자 또는 숫자만 입력해 주세요!');
//       setIsId(false);
//     } else {
//       setIdMessage('사용가능한 아이디 입니다.');
//       setIsId(true);
//     }
//   };

//   const onChangeName = (e) => {
//     const currentName = e.target.value;
//     setName(currentName);

//     if (currentName.length < 2 || currentName.length > 5) {
//       setNameMessage('닉네임은 2글자 이상 5글자 이하로 입력해주세요!');
//       setIsName(false);
//     } else {
//       setNameMessage('사용가능한 닉네임 입니다.');
//       setIsName(true);
//     }
//   };

//   const onChangePassword = (e) => {
//     const currentPassword = e.target.value;
//     setPassword(currentPassword);
//     const passwordRegExp =
//       /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
//     if (!passwordRegExp.test(currentPassword)) {
//       setPasswordMessage(
//         '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!',
//       );
//       setIsPassword(false);
//     } else {
//       setPasswordMessage('안전한 비밀번호 입니다.');
//       setIsPassword(true);
//     }
//   };
//   const onChangePasswordConfirm = (e) => {
//     const currentPasswordConfirm = e.target.value;
//     setPasswordConfirm(currentPasswordConfirm);
//     if (password !== currentPasswordConfirm) {
//       setPasswordConfirmMessage('떼잉~ 비밀번호가 똑같지 않아요!');
//       setIsPasswordConfirm(false);
//     } else {
//       setPasswordConfirmMessage('똑같은 비밀번호를 입력했습니다.');
//       setIsPasswordConfirm(true);
//     }
//   };
//   const onChangeEmail = (e) => {
//     const currentEmail = e.target.value;
//     setEmail(currentEmail);
//     const emailRegExp =
//       /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

//     if (!emailRegExp.test(currentEmail)) {
//       setEmailMessage('이메일의 형식이 올바르지 않습니다!');
//       setIsEmail(false);
//     } else {
//       setEmailMessage('사용 가능한 이메일 입니다.');
//       setIsEmail(true);
//     }
//   };
//   const onChangePhone = (getNumber) => {
//     const currentPhone = getNumber;
//     setPhone(currentPhone);
//     const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

//     if (!phoneRegExp.test(currentPhone)) {
//       setPhoneMessage('올바른 형식이 아닙니다!');
//       setIsPhone(false);
//     } else {
//       setPhoneMessage('사용 가능한 번호입니다:-)');
//       setIsPhone(true);
//     }
//   };

//   const addHyphen = (e) => {
//     const currentNumber = e.target.value;
//     setPhone(currentNumber);
//     if (currentNumber.length == 3 || currentNumber.length == 8) {
//       setPhone(currentNumber + '-');
//       onChangePhone(currentNumber + '-');
//     } else {
//       onChangePhone(currentNumber);
//     }
//   };

//   const onChangeBirth = (e) => {
//     const currentBirth = e.target.value;
//     setBirth(currentBirth);
//   };

//   return (
//     <>
//       <h3>회원가입</h3>
//       <form>
//         <div className="form">{/* 폼에 대한 JSX는 그대로 유지됩니다 */}ID</div>
//         <input placeholder="우리집 고양이 츄르를 좋아해"></input>
//       </form>
//     </>
//   );
// };

// export default Signup;
