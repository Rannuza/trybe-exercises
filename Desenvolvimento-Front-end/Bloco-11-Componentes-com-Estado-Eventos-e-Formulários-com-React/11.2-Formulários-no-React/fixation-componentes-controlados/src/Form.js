import { Component } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Button from './Button';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      cores: '',
      email: '',
      password: '',
      text: '',
      checkbox: false,
      btnCadastro: '',
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <form className="form" name="cores" style={{backgroundColor: this.state.cores}}>
        <Select label="Escolha uma cor " name="cores" value={this.state.cores} handleChange={this.handleChange} />
        <fieldset className="login">
          <Input label="E-mail: " name="email" type="email" placeholder="Digite seu e-mail aqui" value={this.state.email} handleChange={this.handleChange} />
          <Input label="Senha: " name="password" type="password" placeholder="Digite sua senha aqui!" value={this.state.password} handleChange={this.handleChange}/>
        </fieldset> 
        <Input label="Adicione uma foto de perfil " name="foto" type="file" placeholder=""/>
        <Textarea label="Conte um pouco sobre você: " name="text" placeholder="Apresente-se!" rows="6" cols="40" value={this.state.text} handleChange={this.handleChange}/>
        <Input className="checkbox" label="Li e concordo " name="checkbox" type="checkbox" placeholder="" required value={this.state.checkbox} handleChange={this.handleChange}/>
        <Button type="submit" name="Cadastre-se" value="Botão de submit" />
      </form>
    );
  }
}

export default Form;