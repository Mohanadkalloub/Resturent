const FoodCard = (props) => {
  return (
    <div className="box">
      <img src={props.img} alt="" />
      <div className="content">
        <h3>delicious food</h3>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <p>Lorem ipsum dolor sit amet</p>
        <div className="price">$49.99</div>
        <a href="#" className="btn">
          buy now
        </a>
      </div>
    </div>
  );
};
export default FoodCard;
