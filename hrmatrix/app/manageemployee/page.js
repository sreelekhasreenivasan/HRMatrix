import Header from "@/components/Header";
import "./page.css";

const page = () => {
  return (
    <div>
      <Header />
      <h2 className="text-center pt-4 text-white fw-semibold mb-4">
        EMPLOYEE'S DETAILS
      </h2>

      <div className="search-bar">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search by Employee ID"
          ></input>
        </div>
      </div>

      <div className="container">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>CONTACT NO.</th>
              <th>EMAIL ADDRESS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EMPA01</td>
              <td>1234******</td>
              <td>john.doe@example.com</td>
              <td>
                <button className="btn btn-warning btn-sm" title="Suspend">
                  <i className="bi bi-pause-circle"></i>
                </button>
                <button className="btn btn-danger btn-sm" title="Delete">
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>EMPA02</td>
              <td>5678******</td>
              <td>jane.doe@example.com</td>
              <td>
                <button className="btn btn-warning btn-sm" title="Suspend">
                  <i className="bi bi-pause-circle"></i>
                </button>
                <button className="btn btn-danger btn-sm" title="Delete">
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>EMPA03</td>
              <td>9876******</td>
              <td>mark.smith@example.com</td>
              <td>
                <button className="btn btn-warning btn-sm" title="Suspend">
                  <i className="bi bi-pause-circle"></i>
                </button>
                <button className="btn btn-danger btn-sm" title="Delete">
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>EMPA04</td>
              <td>1234******</td>
              <td>john.doe@example.com</td>
              <td>
                <button className="btn btn-warning btn-sm" title="Suspend">
                  <i className="bi bi-pause-circle"></i>
                </button>
                <button className="btn btn-danger btn-sm" title="Delete">
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
