import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [remindersList, setRemindersList] = useState([]);

  const [newReminder, setNewReminder] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/reminders").then((response) => {
      setRemindersList(response.data);
    });
  }, []);

  const submitReminder = () => {
    Axios.post("http://localhost:3001/api/insert", {
      title: titleInput,
      description: descriptionInput,
    });
    
    setRemindersList([
      ...remindersList,
      {title: titleInput, description: descriptionInput},
    ]);
  };

  const deleteReminder = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`);
  };

  const updateReminder = (id) => {
    Axios.put("http://localhost:3001/api/update", { description: newReminder, id: id }).then(
      (response) => {
        setRemindersList(
          remindersList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  title: val.title,
                  description: newReminder,
                }
              : val;
          })
        );
      }
    );
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title text-center mt-3 mb-3">SudoSuCRUD</h1>
      
        <div className="input-group mb-3">
          <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Título</span>
          </div>
          <input type="text" className="form-control" placeholder="Seu título" aria-label="Título" aria-describedby="basic-addon1" onChange={(e) => {
            setTitleInput(e.target.value)
          }}/>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Descrição</span>
          </div>
          <textarea className="form-control" aria-label="Descrição" onChange={(e) => {
            setDescriptionInput(e.target.value)
          }}/>
        </div>

        <div className="d-flex justify-content-center">
          <button className="mb-4 btn btn-success" onClick={submitReminder}>Salvar</button>
        </div>

        <div className="row d-flex justify-content-around">
          {remindersList.map((val) => {
            return(
              <div className="col-md-5 mb-5 card text-white bg-primary">
                <div className="card-header">
                  <h5 className="card-title text-center">{val.title}</h5>
                </div>
                <div className="card-body mb-1">
                  <p className="card-text">{val.description}</p>
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon2"onChange={(e) => {
                    setNewReminder(e.target.value)
                  }}/>
                  <div className="input-group-append">
                    <button className="btn btn-warning" type="button" onClick={() => {updateReminder(val.id)}}>Atualizar</button>
                  </div>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="button" id="delete" className="btn btn-danger mb-2" onClick={() => {deleteReminder(val.id)}}>Deletar</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

// FLLOWING THIS TUTORIAL: https://www.youtube.com/watch?v=T8mqZZ0r-RA