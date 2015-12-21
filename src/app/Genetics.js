import React from 'react';
import cn from 'classnames';
import _ from 'lodash';
import styles from './Genetics.css';
import {Regions} from './Regions.js';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui';

export const SequenceKey = () => {
  const colStyle = {
    height: '24px',
    whiteSpace: 'initial',
  };

  return (
      <div className={styles.key}>
        <h2> Legend </h2>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={colStyle}>
                Icon
              </TableHeaderColumn>
              <TableHeaderColumn style={colStyle}>
                Matches Reference Sequence
              </TableHeaderColumn>
              <TableHeaderColumn style={colStyle}>
                Nucleotide
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn style={colStyle}>
                {<Nucleotide base={'a'} mutant={null} />}
              </TableRowColumn>
              <TableRowColumn style={colStyle}>
                yes
              </TableRowColumn>
              <TableRowColumn style={colStyle}>
                adenine
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={colStyle}>
                {<Nucleotide base={'c'} mutant={null} />}
              </TableRowColumn>
              <TableRowColumn style={colStyle}>
                yes
              </TableRowColumn>
              <TableRowColumn style={colStyle}>
                cytosine
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={colStyle}>
                {<Nucleotide base={'g'} mutant={null} />}
              </TableRowColumn>
              <TableRowColumn style={colStyle}>
                yes
              </TableRowColumn>
              <TableRowColumn style={colStyle}>
                guanine
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={colStyle}>
                {<Nucleotide base={'t'} mutant={null} />}
              </TableRowColumn>
              <TableRowColumn style={colStyle}>
                yes
              </TableRowColumn>
              <TableRowColumn style={colStyle}>
                thiamine
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={colStyle}>
                {<Nucleotide base={'g'} mutant={'c'} />}
              </TableRowColumn>
              <TableRowColumn style={colStyle}>
                no
              </TableRowColumn>
              <TableRowColumn style={colStyle}>
                cytosine (hover to see reference)
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
};

export const GeneSequence = React.createClass({

  propTypes: {
    userSequence: React.PropTypes.array,
    refSequence: React.PropTypes.array,
    geneRegions: React.PropTypes.array,
  },


  mutant(index, nuc) {
    const mutated = _.
      find(this.props.userSequence, {index: index});

    if (mutated && (mutated.letter !== nuc)) {
      return mutated.letter;
    } else {
      return null;
    }
  },

  render() {
    const sequenceClasses = cn(styles.sequence, {
      showRegion: this.state.showRegion,
    });

    return (
      <div className={sequenceClasses} onClick={this.unselect}>
        <Regions regions={this.props.geneRegions}
          showRegion={this.state.regionIndex}
          clickHandler={this.regionClick} />

        <h1>User Sequence</h1>
        {
          this.props.refSequence.map((g, index) => {

            return (
              <Nucleotide
                base={g}
                key={index} />
            );
          }, this)
        }
      </div>
    );
  },
});

export const Nucleotide = React.createClass({
  propTypes: {
    base: React.PropTypes.string,
    mutant: React.PropTypes.string,
    region: React.PropTypes.string,
    active: React.PropTypes.bool,
  },

  componentWillMount() {
    this.setDefault();
  },

  setDefault() {
    this.setState({
      currentVal: this.props.mutant || this.props.base,
    });
  },

  render() {
    const classes = cn([
      styles.gene,
      this.props.base,
      {
        mutant: this.props.mutant,
      },
      this.props.region,
      {
        [styles.activeRegion]: this.props.active,
      },
    ]);

    return (
      <span className={classes} >
      </span>
    );
  },
});
