import './page.css'
import Header from '@/components/Header'

const page = () => {
  return (
    <>
    <Header/>
    <div className='body'>
        <div className="position-relative">
        <h2 className="text-center pt-5 text-white fw-semibold">ADD EMPLOYEE</h2>
        <div className="form-container">
            <form>
                <div className="mb-3">
                    <label className="form-label">FULL NAME <span style={{color: 'red'}}>*</span></label>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="First Name" required></input>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Last Name" required></input>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="department" className="form-label">DEPARTMENT <span style={{color: 'red'}}>*</span></label>
                    <select className="form-control" required>
                        <option selected></option>
                        <option value="1">Class A</option>
                        <option value="2">Class B</option>
                        <option value="3">Class C</option>
                        <option value="4">Class D</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="phone-number" className="form-label">PHONE NUMBER <span style={{color: 'red'}}>*</span></label>
                    <input type="text" className="form-control" required></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="personal-id" className="form-label">PERSONAL IDENTIFICATION <span style={{color: 'red'}}>*</span></label>
                    <input type="text" className="form-control" placeholder="Adhaar Number/ Voter's ID/ PAN Card ID" required></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="upload-file" className="form-label">UPLOAD FILE <span style={{color: 'red'}}>*</span></label>
                    <input type="file" className="form-control" required></input>
                </div>

                <button type="submit" className="btn btn-submit mt-4 w-100">SUBMIT</button>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default page