import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import CartDropdown from './cart-dropdown.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const CartDropdownContainer = compose(
    withRouter,
    connect(mapStateToProps)    
)(CartDropdown);    

export default CartDropdownContainer;