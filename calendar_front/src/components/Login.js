import { useForm } from 'react-hook-form';
import axios from 'axios';

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
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
            <div>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
          <input
            type="text"
            placeholder="아이디"
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
          <input
            type="password"
            placeholder="비밀번호"
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
      </div>
    </div>
  );
};

export default Login;
