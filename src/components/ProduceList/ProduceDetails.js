import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/cart';
import cartReducer from '../../store/cart';
import { likeUnlikeProduct } from '../../store/produce';

const ProduceDetails = ({ produce }) => {
  const cartItem = {};
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <li className='produce-details'>
      <span>{produce.name}</span>
      <span>
        <button
          className={
            'like-button' + (produce.liked ? ' selected' : '')
          }
          onClick={() => dispatch(likeUnlikeProduct(produce.id))}
        >
          <i className={'fas fa-heart'} />
        </button>
        <button
          className={'plus-button' + (cartItem ? ' selected' : '')}
          onClick={() => dispatch(addProduct(produce.id))}
        >
          <i className='fas fa-plus' />
        </button>
      </span>
    </li>
  );
};

export default ProduceDetails;
