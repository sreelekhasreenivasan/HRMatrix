import "./page.css";

const page = () => {
  return (
    <section className="h-full" >
      <div className="left-panel">
        <div>
          <img
            src="rb_496.png"
            alt="Hero image"
            style={{ height: "600px", width: "600px" }}
          ></img>
          <div>
            <p className=" para text-center text-black mt-5 py-4">
              © 2025 HRMatrix. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="form-container">
        <div className="form-box">
          <form>
            <div className="mb-3">
              <label className="form-label text-white">EMPLOYEE'S ID</label>
              <input type="email" className="form-control"></input>
            </div>
            <div className="mb-3">
              <label className="form-label text-white">PASSWORD</label>
              <input type="password" className="form-control"></input>
            </div>
          </form>
          <a href="/user" style={{ textDecoration: "none" }}>
            <button type="submit" className="btn btn-success w-50">
              LOGIN
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default page;
