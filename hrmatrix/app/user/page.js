import Navbar1 from "@/components/Navbar1"
import './page.css'

const page = () => {
  return (
    <div>
        <Navbar1/>
        <div className="section personal-details">
      <div className="section-content">
        <h3>Personal Details</h3>
        <form>
          <div className="mb-3">
            <div className="d-flex justify-content-end gap-3">
                <a href="/data"><button type="button" className="btn btn-success">
                  <i className="bi bi-plus-circle"></i> Add Data
                </button></a>
                <a href="/data"><button type="button" className="btn btn-primary">
                  <i className="bi bi-arrow-repeat"></i> Update Data
                </button></a>
              </div>
          </div>
        </form>
      </div>
    </div>

    <div className="section educational-details">
      <div className="section-content">
        <h3>Educational Details</h3>
        <form>
          <div className="mb-3">
            <div className="d-flex justify-content-end gap-3">
                <a href="/data"><button type="button" className="btn btn-success">
                    <i className="bi bi-plus-circle"></i> Add Data
                  </button></a>
                  <a href="/data"><button type="button" className="btn btn-primary">
                    <i className="bi bi-arrow-repeat"></i> Update Data
                  </button></a>
              </div>
          </div>
        </form>
      </div>
    </div>

    <div className="section account-details">
      <div className="section-content">
        <h3>Account Details</h3>
        <form>
          <div className="mb-3">
            <div className="d-flex justify-content-end gap-3">
                <a href="/data"><button type="button" className="btn btn-success">
                    <i className="bi bi-plus-circle"></i> Add Data
                  </button></a>
                  <a href="/data"><button type="button" className="btn btn-primary">
                    <i className="bi bi-arrow-repeat"></i> Update Data
                  </button></a>
          </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default page