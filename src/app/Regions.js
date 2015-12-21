import React from 'react';
import styles from './Genetics.css';
import '!!style!css!fixed-data-table/dist/fixed-data-table.css';
import {Table, Column, Cell} from 'fixed-data-table';
import EllipsisText from 'react-ellipsis-text';

const TextCell = ({rowIndex, data, columnKey, highlight, ...props}) => {
  const content = `${data[rowIndex][columnKey]}`;
  const highlighted = (highlight !== false) && (highlight === rowIndex);
  const backgroundColor = highlighted ? 'rgba(158, 158, 158, 0.54)' : '';
  const styled = {
    backgroundColor,
  };

  return (
    <Cell {...props} style={styled}>
      <EllipsisText text={content} length={200} />
    </Cell>
  );
};

export const Regions = React.createClass({
  propTypes: {
    regions: React.PropTypes.array.required,
    showRegion: React.PropTypes.array.required,
    clickHandler: React.PropTypes.func.required,
  },

  rowClicked(e, index, row) { // eslint-disable-line no-unused-vars
    e.stopPropagation();
    this.props.clickHandler(index);
  },

  render() {
    const dataList = this.props.regions;
    const columnWidths = {
      name: 100,
      start: 0,
      end: 0,
      description: 300,
    };

    return (
      <div className={styles.regions}>
        <Table
          rowHeight={60}
          headerHeight={50}
          rowsCount={dataList.length}
          isColumnResizing={false}
          width={500}
          maxHeight={500}
          overflowY="auto"
          onRowClick={this.rowClicked}
          {...this.props}>
          <Column
            columnKey="name"
            header={<Cell>First Name</Cell>}
            cell={<TextCell data={dataList}
              highlight={this.props.showRegion} />}
            fixed={true}
            width={columnWidths.name}
            isResizable={false} />
          <Column
            columnKey="start"
            header={<Cell>Start</Cell>}
            cell={<TextCell data={dataList} />}
            width={columnWidths.start}
            isResizable={false}
            minWidth={70}
            maxWidth={170} />
          <Column
            columnKey="end"
            header={<Cell>End</Cell>}
            cell={<TextCell data={dataList} />}
            width={columnWidths.end}
            isResizable={false} />
          <Column
            columnKey="description"
            header={<Cell>Description</Cell>}
            cell={<TextCell data={dataList} />}
            width={columnWidths.description}
            flexGrow={1}
            isResizable={false} />
        </Table>
      </div>
    );
  },
});
