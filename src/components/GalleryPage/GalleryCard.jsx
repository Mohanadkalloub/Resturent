const GalleryCard = (props) => {
  return (
    <a href="#" className="box">
      <img src={props.img} alt="" />
      <div className="icon">
        <i className="fas fa-plus"></i>
      </div>
    </a>
  );
};
export default GalleryCard;
