import app from './app';

// Port
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(
        "Server listening on http://localhost:%d/tvshow in %s mode", 
        port,
        app.get("env"));
});