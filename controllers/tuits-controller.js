import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
  const user = "Dana Gajewski";
  const newTuit = req.body;
  newTuit._id = (new Date()).getTime() + '';
  newTuit.postedBy = {username: user};
  newTuit.likes = 0;
  newTuit.comments = 0;
  newTuit.retuits = 0;
  newTuit.time = new Date();
  newTuit.avatar_image= "https://s3.amazonaws.com/images.berecruited.com/photos/athletes/dashboard/3817216.png?1494963118"

  tuits.push(newTuit);
  res.json(newTuit);
}
const findAllTuits = (req, res) => {
  res.json(tuits);
}
const updateTuit = (req, res) => {
  const tuitId = req.params['tid']
  const updatedTuit = req.body;
  tuits = tuits.map(tuit => tuit._id === tuitId ?
                            updatedTuit :
                            tuit)
  res.json(tuits);
}
const deleteTuit = (req, res) => {
  const tuitId = req.params['tid']
  tuits = tuits.filter(tuit => tuit._id !== tuitId);
  res.json(tuits);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}