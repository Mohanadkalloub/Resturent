import PageContainer from "../components/PageContainer/PageContainer";
import GalleryCardImage1 from "../assets/images/food-galler-img-1.jpg";
import GalleryCardImage2 from "../assets/images/food-galler-img-2.jpg";
import GalleryCardImage3 from "../assets/images/food-galler-img-3.jpg";
import GalleryCardImage4 from "../assets/images/food-galler-img-4.jpg";
import GalleryCardImage5 from "../assets/images/food-galler-img-5.jpg";
import GalleryCardImage6 from "../assets/images/food-galler-img-6.jpg";
import GalleryCard from "../components/GalleryPage/GalleryCard";

const GalleryPage = () => {
  return (
    <PageContainer>
      <section className="gallery" id="gallery">
        <div className="heading">
          <span>our gallery</span>
          <h3>our untold stories</h3>
        </div>
        <div className="gallery-container">
          <GalleryCard img={GalleryCardImage1} />
          <GalleryCard img={GalleryCardImage2} />
          <GalleryCard img={GalleryCardImage3} />
          <GalleryCard img={GalleryCardImage4} />
          <GalleryCard img={GalleryCardImage5} />
          <GalleryCard img={GalleryCardImage6} />
        </div>
      </section>
    </PageContainer>
  );
};
export default GalleryPage;
