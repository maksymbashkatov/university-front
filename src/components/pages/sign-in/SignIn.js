import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./sign-in.scss";
import CheckboxInput from "../../inputs/CheckboxInput";
import SubmitInput from "../../inputs/SubmitInput";
import Header from "../../header/Header";
import Input from "../../inputs/Input";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signInContainer">
      <Header />
      <form>
        <Input
          title="Email"
          name="email"
          value={email}
          onChangeFunc={(e) => setEmail(e.target.email)}
          placeholder="name@mail.com"
        />
        <Input
          title="Password"
          name="password"
          value={password}
          onChangeFunc={(e) => setPassword(e.target.password)}
        />
        <CheckboxInput />
        <SubmitInput />
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SignIn />);

export default SignIn;
