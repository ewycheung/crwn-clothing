import React from 'react';
import { CartItemsContainer, ItemDetailsContainer, NameContainer, PriceContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <CartItemsContainer>
        <img src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>
                {quantity} X ${price}
            </PriceContainer>
        </ItemDetailsContainer>
    </CartItemsContainer>
)

export default React.memo(CartItem);