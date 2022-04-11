import * as tuitsDao from "../dao/tuits-dao.js";

const createTuit = async (req, res) => {
  const user = "Dana Gajewski";
  const newTuit = req.body;
  newTuit.postedBy = {username: user};
  newTuit.likes = 0;
  newTuit.comments = 0;
  newTuit.retuits = 0;
  newTuit.dislikes = 0;
  newTuit.handle = "DanaGajewski"
  newTuit.time = new Date();
  newTuit.avatar_image= "https://s3.amazonaws.com/images.berecruited.com/photos/athletes/dashboard/3817216.png?1494963118"

  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}
const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits()
  res.json(tuits);
}
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params['tid']
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  res.json(status);
}
const deleteTuit = async (req, res) => {
  const tuitId = req.params['tid']
  const status = await tuitsDao.deleteTuit(tuitId);
  res.json(status);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}