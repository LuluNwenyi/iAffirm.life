const axios = require(`axios`);

export default function handler(req, res){
    axios.get(`https://iaffirm.herokuapp.com/affirmations`).then(response => {
        return res.status(200).json({response: response.data})
      })
      .catch(error => {
        return res.status(500).json({error: error})
      })
}
