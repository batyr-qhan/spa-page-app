/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import { link } from 'fs';

class About extends React.Component<IAboutProps, IAboutState> {
  constructor(props: IAboutProps) {
    super(props);

    this.state = {
      users: [],
    };
  }

  public componentDidMount(): void {
    axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
      // console.log(data);
      this.setState({ users: data.data });
    });
  }

  render() {
    console.log(this.state.users);
    return (
      <ul>
        {this.state.users.map((user: { name: React.ReactNode; }) => {
          return <li>{user.name}</li>;
        })}
      </ul>
    );
  }
}

interface IAboutProps {}

interface IAboutState {
  users: any;
}

export default About;
