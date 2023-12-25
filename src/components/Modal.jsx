import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions/todoAction";
import axios from "axios";

const Modal = ({ close, todo }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newText = e.target[1].value;
    const updated = { ...todo, text: newText };
    axios
      .put(`/todos/${todo.id}`, updated)
      .then(() => dispatch(updateTodo(updated)));
    close();
  };

  return (
    <div className="modal d-block text-dark bg-black bg-opacity-50 ">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todoyu Düzenle</h5>
            <button
              onClick={close}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
            <label>Yeni Başlık</label>
            <input
              defaultValue={todo.text}
              className="form-control shadow mt-2 "
              type="text"
            />
          </div>
          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-secondary">
              Vazgeç
            </button>
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
