import axios from 'axios'

const pcOnly = game => game.platform === 1

const fetchGamesByName = name => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://api.thegamesdb.net/Games/ByGameName', {
        params: {
          apikey:
            'b512e9592e15949b0751aca63689953c66d1ca53d788ab3a24ad491c6d49e58f',
          name
        }
      })
      .then(response => {
        const games = response.data.data.games.filter(pcOnly)
        resolve(games)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default fetchGamesByName
