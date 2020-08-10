import React from "react";
import useLoginForm from "../hooks/useFormInput";

function LoginForm({ submit }) {
  const [{ username }, setUsername] = useLoginForm({ username: "" });
  const [{ password }, setPassword] = useLoginForm({ password: "" });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submit(username, password);
      }}
      method="post"
    >
      <input
        type="text"
        name="username"
        onChange={setUsername}
        value={username}
      />
      <input
        type="text"
        name="password"
        onChange={setPassword}
        value={password}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default LoginForm;
