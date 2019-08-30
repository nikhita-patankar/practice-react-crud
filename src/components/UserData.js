import React, { Component} from 'react';

import { connect } from 'react-redux';


class UserData extends Component {


  componentDidUpdate(){

    console.log(this.props);
  }
    render() {
        return (
          <div className="card">
            <div className="card-header">User Data</div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Mobile Number</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  {/* <tbody>
                    { this.props.lists.map((user, i) =>
                      <tr key={i}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.mnumber}</td>
                        <td>
                          <button className="btn btn-warning btn-sm mr-1">Edit</button>
                          <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </tr>
                      )}
                  </tbody> */}
                </table>
              </div>
          </div>          
        );
    }
}

const mapStateToProps = (state) => {
  console.log(state);
  const test = new UserData()
  test.props = state;
  return state
}



export default connect(mapStateToProps)(UserData);