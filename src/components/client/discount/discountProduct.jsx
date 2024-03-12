import React from "react";
import { toast } from "react-toastify";
import { useCreateBasketMutation } from "../../redux/slice/client/basket";

export default function Product(props) {
    const [createBasket ] =   useCreateBasketMutation()
    const productBy = async (id) => {

        console.log(id, 'id');
        const formData = new FormData();
        formData.append("amount", 1);
        formData.append("product", id);
        try {
            await createBasket(formData).unwrap();
            toast.success(`maxsulod  qushildi`);
        } catch (error) {
            toast.error(` Mahsulot Qushilmadi `);
        }
        // refetch();
    }
    return (
        <div className="card">
            <img className="product--image" src={props.url} alt="product image" />
            <h2>{props.name}</h2>
            <p className="price">{props.price}</p>
            <p>{props.description}</p>
            <p>
                <button
                    onClick={() => productBy(props.id)}
                >
                    Add to Basket
                </button>
            </p>
        </div>
    );
}