require('dotenv').config();
const express = require('express');
const pageNotFound = require('./middlewares/pageNotFound');
const authRouter = require('./routes/auth.routes');
const postsRouter = require('./routes/posts.routes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/posts', postsRouter);
app.use(pageNotFound);

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
