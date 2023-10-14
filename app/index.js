const app = require("express")();

const appId = process.env.APPID;

app.get("/", (req, res) =>
  res.send(`Hello from a light weight container! homepage, appid: ${appId}`)
);

app.get("/app1", (req, res) =>
  res.send(`Hello from a light weight container! app1, appid: ${appId}`)
);

app.get("/app2", (req, res) =>
  res.send(`Hello from a light weight container! app2, appid: ${appId}`)
);

app.get("/admin", (req, res) =>
  res.send(`Hello from a light weight container! admin, appid: ${appId}`)
);

app.listen(9999, () => console.log(`Listening on port 9999 for appid: ${appId}...`));
