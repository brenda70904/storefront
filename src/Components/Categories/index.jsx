import { Button, ButtonGroup } from '@mui/material';
import { connect } from 'react-redux';
import { select } from '../../store/reducer';


const Categories = ({ categories, select }) => {
  return (
    <>
      <h2>Browse our Categories</h2>
      <ButtonGroup varient="text" aria-label="category button group">
        {
          categories.map((category, idx) => (
            <Button
              key={`category-${idx}`}
              onClick={() => select(category)}
            >
              {category.displayName}
            </Button>
          ))
        }
      </ButtonGroup>

    </>
  )
};
// store is from the reducer -> /Users/jowb/Documents/401/storefront/src/store/index.js
const mapStateToProps = ({ store }) => {
  return {
    categories: store.categories,
  }
}
// step 1, import the action
// step 2, create dispatch for the imported action
const mapDispatchToProps = {
  select,
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories);
