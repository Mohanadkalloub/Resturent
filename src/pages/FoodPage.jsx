import PageContainer from "../components/PageContainer/PageContainer";
import FoodCard from "../components/FoodPage/FoodCard";
import FoodCardImage1 from "../assets/images/food-img-1.png";
import FoodCardImage2 from "../assets/images/food-img-2.png";
import FoodCardImage3 from "../assets/images/food-img-3.png";

const FoodPage = () => {
  return (
    <PageContainer>
      <section className="food" id="food">
        <div className="heading">
          <span>popular dishes</span>
          <h3>our delicious food</h3>
        </div>
        <div className="box-container">
          <FoodCard img={FoodCardImage1} />
          <FoodCard img={FoodCardImage2} />
          <FoodCard img={FoodCardImage3} />
        </div>
      </section>
    </PageContainer>
  );
};
export default FoodPage;
