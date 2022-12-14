import React,{ useState} from "react";
import { Form, Input, FormFeedback, FormGroup, Label,Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const Login = ({setIsLoggedIn}) => {
    //console.log(process.env.REACT_APP_USERNAME);
    const [username,setUsername]=useState('')
    const [password,setPassword] = useState('')
    const [isValidU,setIsValidU] = useState(null)
    const [isValidP,setIsValidP] = useState(null)
    const navigate = useNavigate();

    const handleCheckUsername=()=>{
        if(username === process.env.REACT_APP_USERNAME)
            setIsValidU(true)
        else
            setIsValidU(false)       
    }
    const handleCheckPassword=()=>{
      if(password === process.env.REACT_APP_PW)
          setIsValidP(true)
      else
          setIsValidP(false)       
  }
  const handleLogin=(e)=>{
    e.preventDefault()
    if(isValidU && isValidP) {
      setIsLoggedIn(true);
      navigate("/todo");
    } else {
      setIsLoggedIn(false);
    }
    
  }
  return (
    <div className="row justify-content-center ">
      <Form className="myform border shadow p-3">
        <h3>Login Form</h3>
        <FormGroup>
          <Label for="exampleEmail">Username:</Label>
          <Input value={username} onChange={(e)=>setUsername(e.target.value)} autoFocus
            onBlur={handleCheckUsername}
            className={isValidU==null  ? "" : (isValidU ? "is-valid" : "is-invalid")}
          />
          <FormFeedback>Hibás felhasználónév!</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Password:</Label>
          <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
             onBlur={handleCheckPassword}
             className={isValidP==null  ? "" : (isValidP ? "is-valid" : "is-invalid")}
          />
          <FormFeedback>Hibás jelszó!</FormFeedback>
        </FormGroup>
        <Button color="primary"
          disabled={!username || !password }
          onClick={handleLogin}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};
