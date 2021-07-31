import data from './data';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">Gazwah</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.products.map((product) => (
              <div key={product._id} className="card">
                <a href="product.html">
                  <img src="./images/p1.png" className="medium" alt="product" />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  <div className="price">{product.price}</div>
                </div>
              </div>
            ))
            }

          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
