import { Button, ButtonGroup } from '@mui/material';
import { select } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {
  const { categories } = useSelector(state => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Browse our Categories</h2>
      <ButtonGroup varient="text" aria-label="category button group">
        {
          categories.map((category, idx) => (
            <Button
              key={`category-${idx}`}
              onClick={() => dispatch(select(category))}
            >
              {category.displayName}
            </Button>
          ))
        }
      </ButtonGroup>

    </>
  )
};

export default Categories;
