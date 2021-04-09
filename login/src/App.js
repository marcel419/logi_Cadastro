import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Button, Form, Label, FormGroup, Input }
  from 'reactstrap';

class App extends Component{
render() {
  return (
    
    <Form className="login-form">
      <div>
      <h1 className="text-center">LOGIN</h1>
      <FormGroup>
       
        <Input type="email" placeholder="Email" required/>
      </FormGroup>

      <FormGroup>
        
        <Input type="password" placeholder="Password"/>
        <span>
        <i class="fa fa-eye" aria-hidden="true"></i>
      </span>
      </FormGroup>

      <Button className="btn-lg btn-dark btn-block ">
        Entrar
        </Button>

        <Button className="btn-lg btn-dark btn-block ">
        Cadastrar
        </Button>
        <div className="text-center pt-3">
        <Label>
          < a href="#"> Esqueceu a senha? </a></Label>
        </div>

      </div>
    </Form>
  );
  
}
}

export default App;
