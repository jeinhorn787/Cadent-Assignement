import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addItem } from '../ducks/groceries';

import ListInputs from './ListInputs';
import ListSelection from './ListSelection';
import ListTable from './ListTable';

export const ListContainer = (props) => {
  useEffect(() => {
    console.log('groceryList', props.groceryList);
  }, [props])

  return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={props.addItem} />
        </div>
        <div className="types">
          <ListSelection />
          <ListTable />
        </div>
      </section>
    );
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  // Other
};

const mapStateToProps = ({
  groceries: {
    list: groceryList,
  },
}) => ({
  groceryList,
});

const mapDispatchToProps = {
  addItem
};

const ListContainerRedux = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default ListContainerRedux;
