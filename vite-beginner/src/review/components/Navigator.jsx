import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

function Navi(){
 
  return(
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Review List</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/calculator">Calculator</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="coinTracker">Coin Tracker</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="movieList">Movie List</a>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navi;