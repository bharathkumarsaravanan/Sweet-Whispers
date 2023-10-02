const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const authApi = require("./Apis/Authapis");

app.use(cors());

app.use(authApi);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

