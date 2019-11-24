import React from 'react';
import logo from './logo.svg';
import './App.css';

const init = { credentials: "same-origin", Accept: "application/json" }
class App extends React.Component {

  state = {
    loaded: false,
    users: null,
    data: null,
    date: null
  };

  async getUser() {
    // let greetingResponse = await fetch("http://localhost:8080/greeting?name=Nihat", { ...init });
    // let data = await greetingResponse.json();
    // let usersResponse = await fetch("http://localhost:8080/all", { ...init });
    // let users = await usersResponse.json();
    let usersResponse = await fetch("http://localhost:8080/ticks", { ...init });
    let users = await usersResponse.json();
    this.setState({ loaded: true, date: users });
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    if (this.state.loaded) {
      const { users, data, date } = this.state;
      console.log("--------------------------");
      console.log(users);
      console.log("--------------------------");

      return (
        <div className="App">
          <p>Loaded</p>
          <p>{date[0].tick}</p>
          {/* <p>{data.id}</p>
          <p>{data.content}</p>
          <p>{users[0].id}</p>
          <p>{users[0].name}</p>
          <p>{users[0].email}</p> */}
        </div>
      );
    }
    return (<div className="App">
      <p>waiting</p></div>)
  }
}

export default App;
