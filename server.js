var express = require('express');
var cors = require('cors');
//require multer npm
var multer  = require('multer')
//create var to connect multer upload destination
var upload = multer({ dest: 'uploads/' })

require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});


app.post('/api/fileanalyse', upload.single('upfile'), function (req, res){
  var fileName = req.file.originalname
  var fileType = req.file.mimetype
  var fileSize = req.file.size
  res.json({name: fileName,
    type: fileType,
    size: fileSize})
})