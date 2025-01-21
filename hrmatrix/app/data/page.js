import Navbar1 from "@/components/Navbar1"
import './page.css'

const page = () => {
  return (
    <div>
        <Navbar1/>
        <div className="form-section">
        <div className="section-header">
            <h4>Personal Details</h4>
            <i className="bi bi-pencil-square update-icon"></i>
        </div>
        <form>
            <div className="mb-3">
                <label htmlFor="full-name" className="form-label">Full Name</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="dob" className="form-label">Date of Birth</label>
                <input type="date" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea className="form-control" rows="3"></textarea>
            </div>
        </form>
    </div>

    <div className="form-section">
        <div className="section-header">
            <h4>Educational Details</h4>
            <i className="bi bi-pencil-square update-icon"></i>
        </div>
        <form>
            <div className="mb-3">
                <label htmlFor="highest-qualification" className="form-label">Highest Qualification</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="institute" className="form-label">Institute Name</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="year-of-passing" className="form-label">Year of Passing</label>
                <input type="text" className="form-control"></input>
            </div>
        </form>
    </div>

    <div className="form-section">
        <div className="section-header">
            <h4>Bank Account Details</h4>
            <i className="bi bi-pencil-square update-icon"></i>
        </div>
        <form>
            <div className="mb-3">
                <label htmlFor="account-number" className="form-label">Account Number</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="bank-name" className="form-label">Bank Name</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="ifsc-code" className="form-label">IFSC Code</label>
                <input type="text" className="form-control"></input>
            </div>
        </form>
    </div>
    </div>
  )
}

export default page