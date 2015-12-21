import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {users} from '../data.json';
import {geneRegions, referrenceGenome} from '../data.json';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content users={users}
          geneRegions={geneRegions}
          referrenceGenome={referrenceGenome}/>
        <Footer />
      </div>
    );
  }
}
