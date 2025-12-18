import corte5 from "../img/corte5.jpg";
import corte7 from "../img/corte7.jpg";
import corte10 from "../img/corte10.jpg";
import corte1 from "../img/corte1.jpg";
import corte2 from "../img/corte2.jpg";
import corte4 from "../img/corte4.jpg";
import corte6 from "../img/corte6.jpg";
import corte8 from "../img/corte8.jpg";
import corte9 from "../img/corte9.jpg";

const Gallery = () => {
  return (
    <section className="gallery-page d-flex flex-column justify-content-center align-items-center text-center">
      <div className="container mt-5 mb-5">
        <h2 className="fw-bold mt-4">Galería</h2>
        <p>Algunos de nuestros trabajos</p>

        <div className="row align-items mb-md-4 px-4">
          <div className="col-md-4">
            <div className="home-card h-100 text-center rounded shadow-sm">
              <img src={corte5} className="gallery-img rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="home-card h-100 text-center rounded shadow-sm">
              <img src={corte7} className="gallery-img rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="home-card h-100 text-center rounded shadow-sm">
              <img src={corte10} className="gallery-img rounded" />
            </div>
          </div>
        </div>
        <div className="row align-items mb-md-4 px-4">
          <div className="col-md-4">
            <div className="home-card h-100 text-center rounded shadow-sm">
              <img src={corte1} className="gallery-img rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="home-card h-100 text-center rounded shadow-sm">
              <img src={corte2} className="gallery-img rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="home-card h-100 text-center rounded shadow-sm">
              <img src={corte4} className="gallery-img rounded" />
            </div>
          </div>
        </div>
        <div className="row align-items mb-md-4 px-4">
          <div className="col-md-4">
            <div className="home-card h-100 text-center rounded shadow-sm">
              <img src={corte6} className="gallery-img rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="home-card h-100 text-center rounded shadow-sm">
              <img src={corte8} className="gallery-img rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="home-card h-100 text-center rounded shadow-sm">
              <img src={corte9} className="gallery-img rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
