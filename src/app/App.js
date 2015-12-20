import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
