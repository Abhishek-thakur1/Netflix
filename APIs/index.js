const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const movieRouter = require('./routes/movies')

dotenv.config();

const PORT = 3000 || process.env.PORT;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('Connected to DB!'))
            .catch(err => console.log(err));
}

app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/movies', movieRouter)

app.listen(PORT, () => console.log(`listening on port ${PORT}`));