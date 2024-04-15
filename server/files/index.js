module.exports = {
  getWelcomePage: (req, res) => {
    res.json({ message: "welcome to home API" })
  },
  getImageFromBase64: (req, res) => {
    try {
      let query = `SELECT top 1 [recording] FROM [DGIS_DATA] order by id desc`;
      db.connect(config, function (error) {
        if (error)
          console.log(error);
        var request = new db.Request();
        request.query(query, (error, result) => {
          if (result.recordset.length > 0) {
            const base64Image = result.recordset[0].recording;
            const imageBuffer = Buffer.from(base64Image, 'base64');
            res.writeHead(200, {
              'Content-Type': 'image/jpeg',
              'Content-Length': imageBuffer.length,
            });
            res.end(imageBuffer);
          } else {
            res.status(404).send('Image not found');
          }
        });
      });
    } catch (e) {
      return res.status(500).json({ status: 'NOK', data: error, messages: "Something went wrong. Please try again later" })
    }
  },
  getDetectionObjects: (req, res) => {
    try {
      let query = `SELECT top 1 [id], [object_name], FORMAT([start_time], 'dd-MM-yyyy HH:mm:ss') AS [start_time], [count]
                   FROM [DGIS_DATA] order by id desc`;
      db.connect(config, function (error) {
        if (error)
          console.log(error);
        var request = new db.Request();
        request.query(query, (error, result) => {
          if (error) {
            return res.status(404).json({ status: 'Not Found', data: error, message: 'Something went wrong in detecting object!!' })
          } else {
            return res.status(200).json({ status: 'OK', data: result.recordset })
          }
        });
      });
    } catch (e) {
      return res.status(500).json({ status: 'NOK', data: error, messages: "Something went wrong. Please try again later" })
    }
  },
  getObjectAnalysis: (req, res) => {
    try {
      let query = `SELECT object_name, MAX(count) AS count 
                   FROM [DGIS_DATA] 
                   where FORMAT(start_time,'yyyy-MM-dd') = FORMAT(GETDATE(),'yyyy-MM-dd')
                   GROUP BY object_name`;
      db.connect(config, function (error) {
        if (error)
          console.log(error);
        var request = new db.Request();
        request.query(query, (error, result) => {
          if (error) {
            return res.status(404).json({ status: 'Not Found', data: error, message: 'Something went wrong in detecting object!!' })
          } else {
            return res.status(200).json({ status: 'OK', data: result.recordset })
          }
        });
      });
    } catch (e) {
      return res.status(500).json({ status: 'NOK', data: error, messages: "Something went wrong. Please try again later" })
    }
  }
}