const gamesRouter = require("express").Router(); // Создали роутер
const { sendAllGames, sendUpdatedGames} = require("../controllers/games");
const { getAllGames, checkIsTitleArray, updateGamesArray, updateGamesFile, findGameById, deleteGame } = require("../middlewares/games");

gamesRouter.post("/games", getAllGames, checkIsTitleArray, updateGamesArray, updateGamesFile, sendUpdatedGames);
gamesRouter.get("/games", getAllGames ,sendAllGames);
gamesRouter.delete("/games/:id", getAllGames, findGameById ,deleteGame , updateGamesFile , sendUpdatedGames);
     

module.exports = gamesRouter;