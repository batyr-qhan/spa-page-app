import React from 'react';
import axios from 'axios';

class About extends React.Component<IAboutProps, IAboutState> {
  constructor(props: IAboutProps) {
    super(props);

    this.state = {
      users: undefined,
    };
  }

  public componentDidMount(): void {
    axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
      console.log(data);
      this.setState({ users: data.data });
    });
  }

  render() {
    console.log(this.state.users);
    return <h1>About Page</h1>;
  }
}

interface IAboutProps {}

interface IAboutState {
  users: any;
}

export default About;
