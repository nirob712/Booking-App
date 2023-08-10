import "./featuredProperties.css";
const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/300x240/655032.jpg?k=8221c08e66df4f35316cfdac689e032d6a122a92345c0d2c91b15ae406c3b7f2&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">La Roulotte de Ciney</span>
        <span className="fpCity"> Belgium, Ciney</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>4.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/300x240/882171.jpg?k=90745e0a4861c5e84ba186d020e5d4bdfec63bdc8d8748600fc3f1c4ae45adb1&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Domki Shelters</span>
        <span className="fpCity"> Poland, Zakopane</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>4.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/300x240/655032.jpg?k=8221c08e66df4f35316cfdac689e032d6a122a92345c0d2c91b15ae406c3b7f2&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Ranczo w Dolinie</span>
        <span className="fpCity"> Poland, Kiszkowo</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>4.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/300x240/655032.jpg?k=8221c08e66df4f35316cfdac689e032d6a122a92345c0d2c91b15ae406c3b7f2&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Tiny House</span>
        <span className="fpCity"> Germany, Trier</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>4.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/300x240/655032.jpg?k=8221c08e66df4f35316cfdac689e032d6a122a92345c0d2c91b15ae406c3b7f2&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Das rote Haus</span>
        <span className="fpCity"> Germany, Simonsberg</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>4.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
