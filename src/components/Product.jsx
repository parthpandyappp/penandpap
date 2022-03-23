export default function Product({
  id,
  title,
  description,
  price,
  coverImg,
  ratings,
}) {
  return (
    <div class="wishlist-product prodMain-size" key={id}>
      <img class="wishlist-img" src={coverImg.link} alt={coverImg.alt} />
      <div class="wishlistProduct-details">
        <h3>{title}</h3>
        <p class="product-description">{description}</p>
        <div class="product-card-heart">
          <h3>₹ {price}</h3>

          <h2>
            <img
              class="wishlist-love"
              src="https://img.icons8.com/plasticine/100/000000/filled-like.png"
              alt="like-button"
            />
          </h2>
        </div>
        {/* <h4>Ratings: {ratings}/5</h4> */}
        <button class="btn btn-primary btn-block">Move to Cart</button>
      </div>
    </div>
  );
}
