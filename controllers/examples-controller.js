const examplesController = (app) => {
  const getString = (req, res) => {
    res.send("Some String")
  }

  const getObject = (req, res) => {
    const object = {some: "object"};
    res.json(object);
  }

  const sayMessage = (req, res) => {
    const msg = req.params.message;
    res.send(`This is your message:
      ${msg}`);
  }

  const register = (req, res) => {
    console.log(req.body)
  }

  const login = (req, res) => {

  }

  app.post("/api/register", register)
  app.post("/api/login", login)
  app.get("/say/:message", sayMessage)
  app.get("/get/some/string", getString);
  app.get('/get/some/object', getObject);
  app.get('/hello', (request, response) => {
    response.send('<h1>Pee pee poo poo. Hi Lior</h1>')
  });
}

module.exports = examplesController;