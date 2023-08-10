import "./featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.planetware.com/photos-large/IRL/ireland-dublin-trinity.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_766,q_75,w_1000/v1/clients/austin/Austin_Skyline_Credit_Christopher_Sherman_lifetime__4f60343d-9f69-450c-8ad3-fa636761786d.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>853 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/16/a6/88/con-la-primavera-in-giappone.jpg?w=700&h=-1&s=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tokyo</h1>
          <h2>1583 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
