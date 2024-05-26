const { writeData } = require("../utils/data"); // Чтение и запись данных в JSON-файл

 // Получим игры из JSON-файла и отправим в ответ на запрос
 const sendAllGames = async (req, res) => {
    res.send(req.games);
  };

  const sendUpdatedGames = async (req, res) => {  
    // Вернём ответ о проделанной операции с данными о играх
    res.send({
    games: req.games,
    updated: req.updatedObject,
  });
}
module.exports = {
    sendAllGames,
    sendUpdatedGames,
}