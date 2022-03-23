export default function Product({
  _id,
  title,
  description,
  price,
  coverImg,
  ratings,
}) {
  console.log("ID from product page: ", _id);
  return (
    <div className="wishlist-product prodMain-size">
      <img className="wishlist-img" src={coverImg.link} alt={coverImg.alt} />
      <div className="wishlistProduct-details">
        <h3>{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-card-heart">
          <h3>₹ {price}</h3>

          <h2>
            <img
              className="wishlist-love"
              src="https://img.icons8.com/plasticine/100/000000/filled-like.png"
              alt="like-button"
            />
          </h2>
        </div>
        {/* <h4>Ratings: {ratings}/5</h4> */}
        <button className="btn btn-primary btn-block">Move to Cart</button>
      </div>
    </div>
  );
}
