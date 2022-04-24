import axios from "axios";
import { useRef, useState } from "react"
import { Link } from "react-router-dom"

type inputField = string | undefined;

const AddStudent = () => {
  const [name, setName] = useState<inputField>('');
  const [course, setCourse] = useState<inputField>('');
  const [email, setEmail] = useState<inputField>('');
  const [phone, setPhone] = useState<inputField>('');

  const nameRef = useRef<HTMLInputElement>(null)
  const courseRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  const allInput: { [key: string]: React.Dispatch<React.SetStateAction<inputField>> } = {
    setName, setCourse, setEmail, setPhone
  };

  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name: inputName } = ev.target;
    const stateName = 'set'+inputName[0].toUpperCase() + inputName.slice(1)
    allInput[stateName](value)
  }

  const formHasError = (): boolean => {
    const inputData: inputField[] = [name, course, email, phone];
    const emptyInput = inputData.some(input => {
      const inputString = typeof input === 'string';
      let res;
      if (input === '') res = true
      if (inputString && input.trim().length <= 2) res = true;
      return res;
    });
    console.warn('One or more input field is empty || less than 2')
    return emptyInput;
  }

  const storeStudent = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (formHasError()) return;
    const result = await axios.post('http://127.0.0.1:8000/api/add-student', { name, course, email, phone });
    if (result.data.status === 200) {
      const dataFields = [nameRef, courseRef, emailRef, phoneRef];
      for (const inputRef of dataFields) inputRef.current!.value = '';
      for (const inputState in allInput) allInput[inputState]('');
    }
    console.log(result.data.message);
  }

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
              <form onSubmit={storeStudent}>
                <div className="form-group mb-3">
                  <label>Student Name</label>
                  <input type="text" name="name" ref={nameRef} onChange={handleInput} className="form-control" />
                </div>

                <div className="form-group mb-3">
                  <label>Student Course</label>
                  <input type="text" name="course" ref={courseRef} onChange={handleInput} className="form-control" />
                </div>

                <div className="form-group mb-3">
                  <label>Student Email</label>
                  <input type="text" name="email" ref={emailRef} onChange={handleInput} className="form-control" />
                </div>

                <div className="form-group mb-3">
                  <label>Student Phone Number</label>
                  <input type="text" name="phone" ref={phoneRef} onChange={handleInput} className="form-control" />
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