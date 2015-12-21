import React from 'react';
import styles from './User.css';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui';

export const UserList = React.createClass({

  propTypes: {
    firstName: React.PropTypes.string.required,
    lastName: React.PropTypes.string.required,
    avatar: React.PropTypes.string.required
  },

  choose(e) {
    e.preventDefault();
    // console.log(`this.props.click is `, this.props.click);
    this.props.click(this.props.order);
  },

  render() {
    const bgStyle = {
      backgroundImage: `url(${this.props.avatar})`
    };
    return (
      <section className={styles.user} onClick={this.choose}>
        <Card>
          <CardHeader>
            {this.props.firstName} {this.props.lastName}
          </CardHeader>
          {
          // <CardMedia overlay={<CardTitle title="User" subtitle="DNA Results"/>}>
          //   <img src="http://lorempixel.com/600/337/nature/"/>
          // </CardMedia>
          }
          <CardMedia>
            <div className={styles.imgCont}>
              <div className={styles.imgBG} style={bgStyle}>
                {
                // <img src={this.props.avatar}/>
                }
              </div>
            </div>
          </CardMedia>
        </Card>
      </section>
    );
  }

export const UserDetail = React.createClass({

  render() {
    return (
      <div>
      </div>
    );
  },
});
