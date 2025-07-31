export default function MainContent() {
  return (
    <main className="container my-5">
      <div className="row">
        <div className="col-md-8 mx-auto text-center">
          <h1 className="display-4 mb-4">
            Welcome to <span className="text-primary">BISS</span>
          </h1>
          <p className="lead">
            A simple, clean website built with React and Bootstrap
          </p>
          <div className="mt-4">
            <button className="btn btn-primary me-2">
              <i className="bi bi-rocket me-1"></i> Get Started
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-book me-1"></i> Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}