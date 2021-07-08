import { Fragment } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {

    const params = useParams();
    console.log(params);

    return (
        <Fragment>
            <h2>Product Detail</h2>
            <p>{params.productId}</p>
        </Fragment>
    );
};

export default ProductDetail;