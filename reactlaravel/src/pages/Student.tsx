import { useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';

const Student = () => {

  useEffect(() => {
    const fetchStudents = async () => {
      const result = await axios.get('http://127.0.0.1:8000/api/students');
      console.log(result);
    }
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Students Data
                <Link to={'add-student'} className="btn btn-primary btn-sm float-end">Add Student</Link>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student