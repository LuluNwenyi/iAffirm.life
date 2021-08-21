const axios = require(`axios`);

export default function handler(req, res){
    axios.post(`https://iaffirm.herokuapp.com/affirmation`, 
        req.body
).then(response => {
        return res.status(200).json({response: response.data})
      })
      .catch(error => {
        return res.status(500).json({error: error})
      })
}



