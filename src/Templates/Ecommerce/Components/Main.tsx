import { women, men, kids } from "../../../staticDB/ecommerceImagesDB";
import AddToCart from "./AddToCart";
import '../../../assets/styles/templatesStyles/Ecommerce/Main.scss';
import Rating from '../../../Templates/Ecommerce/Components/Rating';

const Main: React.FC = () => {
  return (
    <section className="main-container">
      <div className="main-content">
        <h2 className="content-header">Today's Deals</h2>

        {/* Women */}
        <div className="section">
          <h2 className="section-name">Women</h2>
          <p className="more">more...</p>
        </div>
        <div className="section-items">
          {women.map((item) => (
            <div className="tile" key={item}>
              <div className="image">
                <img src={item} alt="" />
              </div>
              <div className="price">
                GHS 1,093.00
              </div>
              <Rating />
              <div className="available">
                <p className="number-available">2 Available</p>
                <AddToCart />
              </div>
            </div>
          ))}
        </div>

        {/* Men */}
        <div className="section">
          <h2 className="section-name">Men</h2>
          <p className="more">more...</p>
        </div>
        <div className="section-items">
          {men.map((item) => (
            <div className="tile" key={item}>
              <div className="image">
                <img src={item} alt="" />
              </div>
              <div className="price">
                GHS 1,093.00
              </div>
              <Rating />
              <div className="available">
                <p className="number-available">2 Available</p>
                <AddToCart />
              </div>
            </div>
          ))}
        </div>

        {/* Kids */}
        <div className="section">
          <h2 className="section-name">Kids</h2>
          <p className="more">more...</p>
        </div>
        <div className="section-items">
          {kids.map((item) => (
            <div className="tile" key={item}>
              <div className="image">
                <img src={item} alt="" />
              </div>
              <div className="price">
                GHS 1,093.00
              </div>
              <Rating />
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
