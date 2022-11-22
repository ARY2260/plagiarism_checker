import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, redirect } from 'react-router-dom';

class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      message:''

    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = e => {
    this.setState({ [e.target.name]: e.target.value })
    const data = {
      message: this.state.message
    };

    axios
      .get('http://localhost:8082/api/books/test', data)
      .then(res => {
        console.log(res);
        this.setState({
          message: res.data.message
        })
        // this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      message: this.state.message
    };

    axios
      .get('http://localhost:8082/api/books/test', data)
      .then(res => {
        this.setState({
          message:''
        })
        this.props.history.push('/');
        alert()
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })

      redirect()
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              
              <form action="/api/books/test" method="get">
                <input type="button" value={this.state.message} onClick={this.onClick}></input>
                {/* <input type="submit" value="Submit"></input> */}
              </form>
              {/* <form action="/action_page.php" method="get">
                  <label for="fname">First name:</label>
                  <input type="text" id="fname" name="fname"><br><br>
                  <label for="lname">Last name:</label>
                  <input type="text" id="lname" name="lname"><br><br>
                  <input type="submit" value="Submit">
              </form> */}

              <form noValidate onSubmit={this.onSubmit}>
                
                <br />
                <div className='form-group'>
                  <input
                    type='name'
                    placeholder='Name'
                    name='Name'
                    className='form-control'
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>
                
                <textarea id="TEXT1" name="w3review" rows="4" cols="100"> </textarea>


                <div className='form-group'>
                  <input
                    type='email'
                    placeholder='Email ID'
                    name='emailid'
                    className='form-control'
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>

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

export default SignUpPage;