const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",                   // Acessar arquivo de configuração do MySQL (my.ini) e deixar a senha vazia! ("password	=") 
  database: "CRUDDataBase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/reminders", (req, res) => {
  const sqlSelect = "SELECT * FROM reminders";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
})

app.post("/api/insert", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const sqlInsert = "INSERT INTO reminders (title, description) VALUES (?,?)";
  db.query(sqlInsert, [title, description], (err, result) => {
    console.log(result);
  });
});

app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM reminders WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/api/update", (req, res) => {
  const id = req.body.id;
  const description =  req.body.description;

  db.query(
    "UPDATE reminders SET description = ? WHERE id = ?",
    [description, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, () => {
  // Showing on terminal
  console.log("Wow! The server started! Running on port 3001")
});

/* DataBase Structure:

  Database name: CRUDDataBase
  Table: reminders
  Column 1: id
  Column 2: title
  Column 3: description

  We used XAMPP 

*/