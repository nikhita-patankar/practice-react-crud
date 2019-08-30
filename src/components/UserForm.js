
import React, { Component } from 'react';
import {connect} from 'react-redux';


class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      mnumber: '',
    };
  }

  componentDidUpdate(){
    console.log('test')
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addList(this.state);
    this.setState({name: '',mnumber: ''});
  }

 
  render() {
    let inputHandlerName = (e) => {
      this.setState({name: e.target.value});
  
    }
    let inputHandlerMnumber = (e) => {
      this.setState({mnumber: e.target.value});
  
    }

    return (
      <div className="card">
        <div className="card-header">
          User Details
        </div>
        <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row align-items-center">
                <div className="col-sm-3 my-1">
                  <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={inputHandlerName}/>
                </div>
                <div className="col-sm-3 my-1">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Mobile Number" value={this.state.mnumber} onChange={inputHandlerMnumber}/>
                  </div>
                </div>
                <div className="col-auto my-1">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
        </div>
      </div>
    );
  }
}
const addDispatch = dispatch => ({
  addList: (data) => { dispatch({type: 'ADD_User', payload: data}) }
})


export default connect(
  (state) => {
    return state
  },
  addDispatch
)(UserForm)
