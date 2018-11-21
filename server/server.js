import express from "express";

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Works"
  });
});

app.listen(port, () => console.log(`SERVER IS RUNNING ON ${port}`));
