import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PlagCheckPage extends Component {
  constructor() {
    super();
    this.state = {
      text1:'text1',
      text2:'text2',
      result:''

    };
  }

  onChange = e => {
    console.log(this.state.text1);
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.text1);
  };

//   onClick = e => {
//     this.setState({ [e.target.name]: e.target.value })
//     const data = {
//       message: this.state.message
//     };

//     axios
//       .get('http://localhost:8082/api/books/test', data)
//       .then(res => {
//         console.log(res);
//         this.setState({
//           message: res.data.message
//         })
//         // this.props.history.push('/');
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

  onSubmit = e => {
    e.preventDefault();

    const data = {
        text1: this.state.text1,
        text2: this.state.text2,
        result: this.state.result
    };
    console.log(data);
    axios
      .post('http://localhost:8082/api/plag_check/nlp', data)
      .then(res => {
        console.log(res);
        this.setState({
            result: res.data.results
        })
        alert("Plagiarism check complete!");
        this.props.history.push('/');
        
      })
      .catch(err => {
        console.log("Error in PlagCheckPage!");
      })
  };

  render() {
    return (
      <div className="PlagCheckPage">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Check for Plagiarism</h1>

              <form noValidate onSubmit={this.onSubmit}>
                <label for="fname">Text 1</label>                
                <textarea id="text1" name="text1" defaultValue="text1" placeholder="text1" rows="4" cols="100" onChange={this.onChange}></textarea>
                <br></br>
                <label for="fname">Text 2</label>
                <textarea id="text2" name="text2" defaultValue="text2" placeholder="text2" rows="4" cols="100" onChange={this.onChange}></textarea>
                <input type="submit" value="Submit" className="btn btn-outline-warning btn-block mt-4"></input>
             </form>
            <br></br>
            <textarea id="result" name="result" value={this.state.result} rows="4" cols="100"> </textarea>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlagCheckPage;