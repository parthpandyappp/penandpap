import toast from "react-hot-toast";

const toastStyle = {
    backgroundColor: "#FF5678",
    border: "2px solid black",
    padding: "16px",
    color: "white",
}
const notifyCart = () =>
    toast(
        (t) => (
            <span>
                <b>Added to Cart</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyAddWish = () =>
    toast(
        (t) => (
            <span>
                <b>Added to Wishlist</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyRemoveWish = () =>
    toast(
        (t) => (
            <span>
                <b>Removed from Wishlist</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

export { notifyCart, notifyAddWish, notifyRemoveWish };