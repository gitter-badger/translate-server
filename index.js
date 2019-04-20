const app = require('./app');
const config = require('./config');

const { PORT } = config;

app.listen(PORT, () => console.log(`translate api server is listening on port ${PORT}`));