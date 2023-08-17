import { useForm } from 'react-hook-form';
import styles from './styles/Login.module.css';
import Signup from './Signup';
import axios from 'axios';

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #ebecf0;
//   overflow: hidden;
// `;

// const LoginContainer = styled.div`
//   border-radius: 10px;
//   box-shadow:
//     -5px -5px 10px #fff,
//     5px 5px 10px #babebc;
//   position: absolute;
//   width: 768px;
//   min-height: 480px;
//   overflow: hidden;
// `;

// const Form = styled.div`
//   background: #ebecf0;
//   display: flex;
//   flex-direction: column;
//   padding: 0 50px;
//   height: 100%;
//   justify-content: center;
//   align-items: center;
// `;

// const Input = styled.input`
// background: #eee;
// padding: 16px;
// margin: 8px 0;
// width: 85%;
// border: 0;
// outline: none;
// border-radius: 20px;
// box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
//   }
// `;

// const Button = styled.button`
//   border-radius: 20px;
//   border: none;
//   outline: none;
//   font-size: 12px;
//   font-weight: bold;
//   padding: 15px 45px;
//   margin: 14px;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   cursor: pointer;
//   transition: transform 80ms ease-in;
// `;

// const SocialLinks = styled.div`
//   margin: 20px 0;
// `;

// const SocialLink = styled.div`
//   width: 40px;
//   height: 40px;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0 5px;
//   border-radius: 50%;
//   box-shadow:
//     -5px -5px 10px #fff,
//     5px 5px 8px #babebc;
//   cursor: pointer;
// `;

// const SocialIcon = styled.i`
//   color: #000;
// `;

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
    <div>
      <p className={styles.text}>ㅇㅇㅇㅇㅇㅇㅇㅇㅇ</p>
    </div>
    // <Container>
    //   <LoginContainer>
    //     <Form onSubmit={handleSubmit(onSubmit)}>
    //       {/* <h1>Sign In</h1> */}
    //       <SocialLinks>
    //         <SocialLink>
    //           <SocialIcon
    //             className="fa fa-facebook"
    //             aria-hidden="true"
    //           ></SocialIcon>
    //         </SocialLink>
    //         <SocialLink>
    //           <SocialIcon
    //             className="fa fa-twitter"
    //             aria-hidden="true"
    //           ></SocialIcon>
    //         </SocialLink>
    //         <SocialLink>
    //           <SocialIcon
    //             className="fa fa-linkedin"
    //             aria-hidden="true"
    //           ></SocialIcon>
    //         </SocialLink>
    //       </SocialLinks>
    //       <Input
    //         className="id"
    //         type="text"
    //         placeholder="아이디"
    //         aria-invalid={
    //           isSubmitted ? (errors.id ? 'true' : 'false') : undefined
    //         }
    //         {...register('id', {
    //           required: '아이디는 필수 입력입니다.',
    //           minLength: {
    //             value: 4,
    //             message: '4자리 이상 입력해주세요.',
    //           },
    //         })}
    //       />
    //       {errors.id && <small role="alert">{errors.id.message}</small>}
    //       {/* <label htmlFor="password">비밀번호</label> */}
    //       <Input
    //         className="password"
    //         type="password"
    //         placeholder="비밀번호"
    //         aria-invalid={
    //           isSubmitted ? (errors.password ? 'true' : 'false') : undefined
    //         }
    //         {...register('password', {
    //           required: '비밀번호는 필수 입력입니다.',
    //           minLength: {
    //             value: 7,
    //             message: '7자리 이상 비밀번호를 사용하세요.',
    //           },
    //         })}
    //       />
    //       {errors.password && (
    //         <small role="alert">{errors.password.message}</small>
    //       )}
    //       <Button type="submit" disabled={isSubmitting}>
    //         로그인
    //       </Button>
    //     </Form>
    //   </LoginContainer>
    //   <Signup></Signup>
    // </Container>
  );
};

export default Login;
