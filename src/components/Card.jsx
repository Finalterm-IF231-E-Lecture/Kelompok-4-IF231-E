function Card(props) {
  return (
    <div className="box">
      <div className="border"></div>
      <div className="top">
        <div className="name">
          <h2>{props.name}</h2>
          <div className="phone">
            <p>{props.phone}</p>
            <p>{props.email}</p>
          </div>
        </div>
        <div className="gambar">
          <img src={`${props.img}`} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Card;
