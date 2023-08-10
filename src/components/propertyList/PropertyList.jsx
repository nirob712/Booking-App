import "./propertyList.css";
const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://static.independent.co.uk/2023/03/24/09/Best%20New%20York%20boutique%20hotels.jpg?width=1200"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Appartments</h1>
          <h2>213 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.engelvoelkers.com/images/07e43544-9e5f-4571-ae73-7170dc2d6809/modern-villa-project-with-innovative-concept"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>733 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.wvlogcabins.com/wp-content/uploads/2020/10/HarmansCabin20_03-scaled.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>323 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://trekbaron.com/wp-content/uploads/2020/07/types-of-resorts-July282020-1-min.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>322 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
