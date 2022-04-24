import { Link } from 'react-router-dom';

interface IProps {
  isLoading: boolean;
  students: {[key: string]: any}[];
}

const TableData: React.FC<IProps> = ({isLoading, students}) => {

  return (
    <>
      {
        isLoading ? (
          <tr><td colSpan={7}><h2>Loading...</h2></td></tr>
        ) : (
          students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>
                <Link to={`edit-student/${student.id}`} className="btn btn-success btn-sm">Edit</Link>
              </td>
              <td>
                <button type="button" className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))
        )
      }
    </>
  )
}

export default TableData