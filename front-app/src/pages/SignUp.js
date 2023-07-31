import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authService } from "../fbase";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const register = async () => {
    try {
      setErrorMsg("");
      const createdUser = await createUserWithEmailAndPassword(authService, registerEmail, registerPassword);
      console.log(createdUser);
      setRegisterEmail("");
      setRegisterPassword("");
      if (createdUser.operationType === "signIn") {
        alert("회원가입 성공. 메인페이지로 이동합니다.");
        navigate("/admin"); // 메인 페이지
      }
      localStorage.setItem('access_token',createdUser._tokenResponse.idToken);
      localStorage.setItem('refresh_token',createdUser._tokenResponse.refreshToken);
    } catch (err) {
      //console.log(err.code);
      switch (err.code) {
        case 'auth/weak-password':
          setErrorMsg("비밀번호는 6자리 이상이어야 합니다");
          break;
        case 'auth/invalid-email':
          setErrorMsg("잘못된 이메일 주소입니다");
          break;
        case 'auth/email-already-in-use':
          setErrorMsg("이미 가입되어 있는 계정입니다");
          break;
        default:
          setErrorMsg("오류가 발생했습니다");
      }
    }
  };

  return (
    <div className="signUpform">
      <input
        type="text"
        placeholder="이메일을 입력하세요."
        value={registerEmail}
        onChange={(e) => setRegisterEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호를 입력하세요."
        value={registerPassword}
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <br />
      <button type="submit" onClick={register}>
        회원가입 하기
      </button>
      <p>{errorMsg}</p>
    </div>
  );
};

export default SignUp;
