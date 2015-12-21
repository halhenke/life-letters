import React from 'react';
import _ from 'lodash';
import styles from './Content.css';
import {UserList, UserDetail} from './User.js';
import fb from 'flexboxgrid/dist/flexboxgrid.css';

//     avatar: 'http://www.blastr.com/sites/blastr/files/the-hulk.jpg',
//     avatar: 'http://d.ibtimes.co.uk/en/full/1406562/thor-chris-hemsworth-avengers.jpg',


const UserCards = React.createClass({

  propTypes: {
    users: React.PropTypes.array.required,
    clicked: React.PropTypes.func.required,
  },

  rowMap(people, rowIndex) {
    return (
        <div className={fb.row} key={rowIndex}>
        {
          people.map(function (u, index) {
            return (
              <div className={fb[`col-xs-6`]} key={index}>
                <div className={fb.box}>
                  <UserList
                    user={u}
                    order={u.order}
                    key={u.order}
                    click={this.props.clicked}/>
                </div>
              </div>
            );
          }, this)}
        </div>
      );
  },

  usersMap(people) {
    return _.chain(people).
      map(function (u, index) {
        u.order = index;
        return u;
      }, this).
      chunk(2).
      map(this.rowMap, this).
      value();
  },

  render() {
    return (
      <div>
        {
          <h1>Users</h1>
        }
        {
          this.usersMap(this.props.users)
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
