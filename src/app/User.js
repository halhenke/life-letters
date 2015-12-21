import React from 'react';
import styles from './User.css';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui';

export const UserList = React.createClass({

  propTypes: {
    user: React.PropTypes.object.required,
    click: React.PropTypes.func.required,
    order: React.PropTypes.number.required,
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
  },
});


export const UserDetail = React.createClass({

  propTypes: {
    user: React.PropTypes.object.required,
    reference: React.PropTypes.array.required,
    geneRegions: React.PropTypes.array.required,
    clicked: React.PropTypes.func.required,
  },

  back(e) {
    e.preventDefault();
    this.props.clicked();
  },

  render() {
    const fullName = `${this.props.user.firstName} ${this.props.user.lastName}`;
    return (
      <div>
        <RaisedButton label="Back to Users" secondary={true} onClick={this.back} />
        <Paper>
          <Card>
          </Card>
        </Paper>
      </div>
    );
  },
});
