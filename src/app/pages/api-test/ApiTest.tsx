import React from 'react';
import axios from 'axios';

export default class ApiTest extends React.Component {
  state = {
    people: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const people = res.data;
      this.setState({ people });
    });
  }

  render() {
    return (
      <ul>
        {this.state.people.map((person: any) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}
