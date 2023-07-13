const BlogsPageCard = (props) => {
  return (
    <div className="box">
      <img src={props.img} alt="" />
      <div className="content">
        <h3>burger</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rerum
          odit, itaque mollitia sit optio?
        </p>
        <a href="#" className="btn">
          read more
        </a>
      </div>
    </div>
  );
};
export default BlogsPageCard;
