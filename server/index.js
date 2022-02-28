const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
const date = new Date();
console.log(date,date.toISOString())
const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "socialmedia",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const time = date;
  const tags = req.body.tags;
  db.query(
    "INSERT INTO posts (user_name, description,created,tags) VALUES (?,?,?,?)",
    [name, description,time,tags],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/createComment", (req, res) => {
  const comment = req.body.comment;
  const user_id = "1";

  db.query(
    "INSERT INTO comments (user_id,comment) VALUES (?,?)",
    [user_id, comment],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/posts", (req, res) => {
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/comments", (req, res) => {
  db.query("SELECT * FROM comments", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const name = req.body.name;
//   const age = req.body.age;
//   const country = req.body.country;
//   const rateb = req.body.rateb;
//   db.query(
//     "UPDATE employees SET name = ?, age= ?, country = ?, rateb = ? WHERE id = ?",
//     [name, age, country , rateb, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.listen(PORT, () => {
  console.log("Ok !! ",PORT);
});
