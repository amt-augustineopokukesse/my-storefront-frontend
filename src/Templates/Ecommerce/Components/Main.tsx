import { women, men, kids } from "../../../staticDB/ecommerceImagesDB";
import AddToCart from "./AddToCart";
import '../../../assets/styles/templatesStyles/Ecommerce/Main.scss';

const Main: React.FC = () => {
  return (
    <section className="main-container">
      <div className="main-content">
        <h2 className="content-header">Today's Deals</h2>

        {/* Women */}
        <div className="sub-section">
          <h2 className="">Women</h2>
          <p className="">more...</p>
        </div>
        <div className="women-section">
          {women.map((item) => (
            <div className="tile" key={item}>
              <div className="image">
                <img src={item} alt="" />
              </div>
              <div className="price">
                GHS 1,093.00
              </div>
              <div className="available">
                <p className="number-available">2 Available</p>
                <AddToCart />
              </div>
            </div>
          ))}
        </div>

        {/* Men */}
        <div className="sub-section">
          <h2 className="">Men</h2>
          <p className="">more...</p>
        </div>
        <div className="women-section">
          {men.map((item) => (
            <div className="tile" key={item}>
              <div className="image">
                <img src={item} alt="" />
              </div>
              <div className="price">
                GHS 1,093.00
              </div>
              <div className="available">
                <p className="number-available">2 Available</p>
                <AddToCart />
              </div>
            </div>
          ))}
        </div>

        {/* Kids */}
        <div className="sub-section">
          <h2 className="">Kids</h2>
          <p className="">more...</p>
        </div>
        <div className="women-section">
          {kids.map((item) => (
            <div className="tile" key={item}>
              <div className="image">
                <img src={item} alt="" />
              </div>
              <div className="price">
                GHS 1,093.00
              </div>
              <div className="available">
                <p className="number-available">2 Available</p>
                <AddToCart />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Main;
