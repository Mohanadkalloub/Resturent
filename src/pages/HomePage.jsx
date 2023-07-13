import PageContainer from "../components/PageContainer/PageContainer";

const HomePage = () => {
  return (
    <PageContainer>
      <section className="home" id="home">
        <div className="home-img">
          <div className="content">
            <span>outstanding food</span>
            <h3>delicious cooking</h3>
            <a to="#" className="btn-home">
              get strated
            </a>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
export default HomePage;
