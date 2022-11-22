import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username:'',
      password:'',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password,
    
    };

    axios
      .post('http://localhost:8082/api/plag_check', data)
      .then(res => {
        this.setState({
          username:'',
          password:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in LoginPage!");
      })
  };

  render() {
    return (
      <div className="LoginPage">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-right">
                  New User
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">LogIn</h1>


              <form noValidate onSubmit={this.onSubmit}>
                
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='User Name'
                    name='username'
                    className='form-control'
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Password'
                    name='password'
                    className='form-control'
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;