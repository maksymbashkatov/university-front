import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./sign-in.scss";
import TextInput from "../../inputs/TextInput";
import PasswordInput from "../../inputs/PasswordInput";
import CheckboxInput from "../../inputs/CheckboxInput";
import SubmitInput from "../../inputs/SubmitInput";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <TextInput
        title="Email"
        name="email"
        value={email}
        onChangeFunc={(e) => setEmail(e.target.email)}
        placeholder="name@mail.com"
      />
      <PasswordInput
        title="Password"
        name="password"
        value={password}
        onChangeFunc={(e) => setPassword(e.target.password)}
      />
      <CheckboxInput />
      <SubmitInput />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SignIn />);

export default SignIn;
