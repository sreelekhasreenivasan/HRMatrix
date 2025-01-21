
const Contact = () => {
  return (
    <div className="container contact-container position-relative">
        <div className="vertical-text contact">CONTACT US</div>
        <div className="circle contact-circle"></div>
        <div className="contact-form">
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact