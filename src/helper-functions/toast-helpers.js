import toast from "react-hot-toast";

const notify = () =>
    toast(
        (t) => (
            <span>
                <b>Added to Cart</b>
            </span>
        ),
        {
            style: {
                backgroundColor: "#FF5678",
                border: "2px solid black",
                padding: "16px",
                color: "white",
            },
        }
    );

export { notify };