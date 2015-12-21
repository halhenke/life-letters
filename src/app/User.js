import React from 'react';
import classnames from 'classnames';
import styles from './User.css';
import {GeneSequence, SequenceKey} from './Genetics.js';
import {Card, CardHeader, Avatar, CardMedia, CardTitle} from 'material-ui';
import {Paper} from 'material-ui';
import Colors from 'material-ui/src/styles/colors';
import {RaisedButton} from 'material-ui';
import fb from 'flexboxgrid/dist/flexboxgrid.css';

export const UserList = React.createClass({

  propTypes: {
    user: React.PropTypes.object.required,
    click: React.PropTypes.func.required,
    order: React.PropTypes.number.required,
  },

  choose(e) {
    e.preventDefault();
    this.props.click(this.props.order);
  },

  render() {
    const bgStyle = {
      backgroundImage: `url(${this.props.user.avatar})`,
    };
    const initialAvatar = (
      <Avatar
        backgroundColor={(this.props.user.gender === 'female') ? Colors.red400 : Colors.blue400} >
        {this.props.user.firstName[0]}{this.props.user.lastName[0]}
      </Avatar>
    );

    return (
      <section className={styles.user} onClick={this.choose}>
        <Card>
          <CardHeader
            avatar={initialAvatar}
            title={`${this.props.user.firstName} ${this.props.user.lastName}`} />
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
    const avatarClasses = classnames([
      fb[`col-xs-6`],
    ]);

    return (
      <div>
        <RaisedButton label="Back to Users" secondary={true} onClick={this.back} />
        <Paper>
          <Card>
            <div className={fb[`row`]}>
              <div className={fb[`col-xs-6`]}>
                <SequenceKey />
              </div>
              <div className={avatarClasses}>
                <CardMedia
                  overlay={<CardTitle title={fullName} />} >
                  <img src={this.props.user.avatar}/>
                </CardMedia>
              </div>
            </div>
          </Card>
        </Paper>
      </div>
    );
  },
});
