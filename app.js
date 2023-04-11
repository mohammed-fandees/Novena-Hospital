const express = require("express");
const browserSync = require("browser-sync");
const app = express();
const port = 8080;
const dataRecuest = require("./public/data/data.json");
const { title } = require("process");
const data = dataRecuest.features;
const bs = browserSync.create();


bs.init({
  file: ["public/**/*.*', 'views/**/*.*"],
  logSnippet: false,
  reloadDelay: 300,
});

app.set("views", "./views");
app.set("view engine", "pug"); // to use ejs files
app.use(express.static("public"));
app.enable("view cache");
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about", {
    span: "About Us",
    title: "About Us",
    content: data,
  });
});

app.get("/services", (req, res) => {
  res.render("services", { span: "Our services", title: "What We Do" });
});

app.get("/departments", (req, res) => {
  res.render("departments", {
    span: "All Department",
    title: "Care Department",
  });
});

app.get("/departments/department-details", (req, res) => {
  res.render("department", {
    span: "Department Features",
    title: "Department Details"
  })
})

app.get("/doctors", (req, res) => {
  res.render("doctors", { span: "All Doctors", title: "Specalized Doctors" });
});

app.get("/doctors/doctor-details", (req, res) => {
  res.render("doctor", { span: "Doctor Details", title: "Alexandar James" });
});

app.get("/appoinment", (req, res) => {
  res.render("appoinment", { span: "Book your seat", title: "Appoinment" });
});

app.get("/blog", (req, res) => {
  res.render("blog", { span: "Our blog", title: "Blog Articles" });
});

app.get("/blog", (req, res) => {
  res.render("blog", { span: "Our blog", title: "Blog Articles" });
});

app.get("/blog/article", (req, res) => {
  res.render("article", { span: "News details", title: "Healthy Article" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { span: "Contact Us", title: "Get In Touch" });
});

app.use((req, res, next) => {
  res.status(404).render("not-found");
});

app.listen(port, (req, res) => {
  console.log(`Express URL: http://localhost:${port}`);
});
