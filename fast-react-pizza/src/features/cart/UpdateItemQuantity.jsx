import { useDispatch } from "react-redux";
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({quantity,pizzaID}) {
    const dispatch=useDispatch();
    return (
        <div  className="flex items-center gap-2 md:gap-3">
            <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaID))} >-</Button>
<span className="text-sm font-medium">{quantity}</span>
            <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaID))} >+</Button>
        </div>
    )
}

export default UpdateItemQuantity
