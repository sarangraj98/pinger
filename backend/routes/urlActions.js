const { response } = require("express");
const express = require("express");
const router = express.Router();
const pagespeed = require('gpagespeed')

router.get('/checkTime', async (req, res) => {
  var urls = 'http://' + req.query.url
  var time = req.query.time
  const options = {
    url: urls,
    key: 'AIzaSyBx84ORrvoDI_oS7ev4QPieZvKXax4-qxQ'
  }
  pagespeed(options)
    .then(data => {
      const datas = Object.entries(data.lighthouseResult.audits);
      const serverTime = datas.filter(item => {
        if (item[0] == 'server-response-time') {
          return JSON.stringify(item[1])
        }
      })

      let responseTime = Number(serverTime[0][1].details.items[0].responseTime);
      if (responseTime > time) return res.status(200).send({ message: "Oops your url is not responding with in the given time", responseTime: responseTime });
      res.status(200).send({ message: "Responded ! ", responseTime: responseTime });
    })
    .catch(error => {
      console.error(error)
    })
})

module.exports = router;