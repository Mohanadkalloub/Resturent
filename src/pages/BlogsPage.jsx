import PageContainer from "../components/PageContainer/PageContainer";
import BlogsCardImage1 from "../assets/images/blog-img-1.jpg";
import BlogsCardImage2 from "../assets/images/blog-img-2.jpg";
import BlogsCardImage3 from "../assets/images/blog-img-3.jpg";
import BlogsCardImage4 from "../assets/images/blog-img-4.jpg";
import BlogsCardImage5 from "../assets/images/blog-img-5.jpg";
import BlogsCardImage6 from "../assets/images/blog-img-6.jpg";
import BlogsPageCard from "../components/BlogsPage/BlogsPageCard";

const BlogsPage = () => {
  return (
    <PageContainer>
      <section className="blogs" id="blogs">
        <div className="heading">
          <span>our blogs</span>
          <h3>our latest posts</h3>
        </div>
        <div className="box-container">
          <BlogsPageCard img={BlogsCardImage1} />
          <BlogsPageCard img={BlogsCardImage2} />
          <BlogsPageCard img={BlogsCardImage3} />
          <BlogsPageCard img={BlogsCardImage4} />
          <BlogsPageCard img={BlogsCardImage5} />
          <BlogsPageCard img={BlogsCardImage6} />
        </div>
      </section>
    </PageContainer>
  );
};
export default BlogsPage;
