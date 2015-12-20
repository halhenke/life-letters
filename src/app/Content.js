import React from 'react';
import styles from './Content.css';

export default class Content extends React.Component {

  userCardClick() {
    const self = this;

    return (num) => {
      console.log(`userCardClick got ${num}`);
      // self.setState({
      //   component: <DetailView people={users} initial={num} clicked={this.detailClick()} />,
      // });
    };
  }

  detailClick() {
    const self = this;

    return () => {
      self.setState({
        component: <UserCards clicked={this.userCardClick()}/>
      });
    };
  }

  componentDidMount() {
    this.setState({
      component: <UserCards clicked={this.userCardClick()}/>
    });
  }

  render() {
    return (
      <section className={styles.content}>
        {this.state.component}
      </section>
    );
  }
}
