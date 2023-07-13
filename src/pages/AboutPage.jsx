import PageContainer from "../components/PageContainer/PageContainer";
import AboutImage from "../assets/images/about-img.png";
import AboutImageIcon1 from "../assets/images/about-icon-1.png";
import AboutImageIcon2 from "../assets/images/about-icon-2.png";
import AboutImageIcon3 from "../assets/images/about-icon-3.png";

const AboutPage = () => {
  return (
    <PageContainer>
      <section class="about" id="about">
        <div class="image">
          <img src={AboutImage} alt="" />
        </div>
        <div class="content">
          <h3 class="title">welcome to our restaurant</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            non quod, nisi atque aliquam ipsum quas itaque possimus optio porro
            voluptas veniam nobis fuga quos molestiae at similique eveniet
            eligendi?
          </p>
          <a href="#" class="btn">
            read more
          </a>
          <div class="icon-container">
            <div class="icons">
              <img src={AboutImageIcon1} alt="" />
              <h3>quality food</h3>
            </div>
            <div class="icons">
              <img src={AboutImageIcon2} alt="" />
              <h3>food & drinks</h3>
            </div>
            <div class="icons">
              <img src={AboutImageIcon3} alt="" />
              <h3>expert chefs</h3>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
export default AboutPage;
