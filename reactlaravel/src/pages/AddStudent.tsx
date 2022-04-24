import { useState } from "react"
import { Link } from "react-router-dom"

const AddStudent = () => {
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Add Students
                <Link to={'/'} className="btn btn-primary btn-sm float-end">BACK</Link>
              </h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label>Student Name</label>
                  <input type="text" name="name" value="" className="form-control" />
                </div>

                <div className="form-group mb-3">
                  <label>Student Course</label>
                  <input type="text" name="course" value="" className="form-control" />
                </div>

                <div className="form-group mb-3">
                  <label>Student Email</label>
                  <input type="text" name="email" value="" className="form-control" />
                </div>

                <div className="form-group mb-3">
                  <label>Student Phone Number</label>
                  <input type="text" name="phone" value="" className="form-control" />
                </div>

                <div className="form-group mb-3">
                  <button type="submit" className="btn btn-primary">Add Student</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudent