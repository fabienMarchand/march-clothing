import { FC } from "react";

import { CartItemContainer, ItemDetails } from "./cart-item.styles";
import { CartItem as TypeCartItem } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: TypeCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }: CartItemProps) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
