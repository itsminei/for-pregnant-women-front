import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authService } from "../fbase";

const Login = () => {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const signin = async () => {
    try {
      setErrorMsg("");
      const signinUser = await signInWithEmailAndPassword(
        authService,
        signinEmail,
        signinPassword
      );
      console.log(signinUser);
      setSigninEmail("");
      setSigninPassword("");
    } catch (err) {
      //console.log(err.code);
      switch (err.code) {
        default:
          setErrorMsg("오류가 발생했습니다");
      }
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="아이디를 입력하세요."
        value={signinEmail}
        onChange={(e) => setSigninEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호를 입력하세요."
        value={signinPassword}
        onChange={(e) => setSigninPassword(e.target.value)} // 이 부분을 수정하였습니다.
      />
      <br />
      <button onClick={signin}>로그인하기</button>
      <p>{errorMsg}</p>
    </>
  );
};

export default Login;
