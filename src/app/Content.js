import React from 'react';
import styles from './Content.css';
import {UserList, UserDetail} from './User.js';
const UserCards = React.createClass({

  propTypes: {
    users: React.PropTypes.array.required,
    clicked: React.PropTypes.func.required,
  },
  render() {
    return (
      <div>
        {
          <h1>Users</h1>
        }
      </div>
    );
  },
});

// Break 12:40

export default React.createClass({
  propTypes: {
    users: React.PropTypes.array.required,
    reference: React.PropTypes.array.required,
    geneRegions: React.PropTypes.array.required,
  },


  componentWillMount() {
    this.setState({
      component: <UserCards
        users={this.props.users}
        clicked={this.userCardClick()}/>,
    });
  },

  userCardClick() {
    const self = this;

    return num => {
      self.setState({
        component: <UserDetail
          user={self.props.users[num]}
          reference={self.props.referrenceGenome}
          geneRegions={self.props.geneRegions}
          clicked={self.detailClick()} />,
      });
    };
  },

  detailClick() {
    const self = this;

    return () => {
      self.setState({
        component: <UserCards
          users={this.props.users}
          clicked={self.userCardClick()}/>,
      });
    };
  },

  render() {
    return (
      <section className={styles.content}>
        {this.state.component}
      </section>
    );
  },
});
