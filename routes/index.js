
/*
 * GET home page.
 */
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
  host     : '35.154.96.152',
  user     : 'testuser',
  password : 'p45SP06jbK0lrt',
  database : 'user'
});

// Connect
db.connect((err) => {
  if(err){
      throw err;
  }
  console.log('MySql Connected...');
});


var crypto = require('crypto'),
    mime = require('mime'),
    uuid = require('node-uuid'),
    moment = require('moment'),
    config = require('../config');

exports.index = function(req, res){
  /* Index ka view */

  res.render('index', { aws_bucket: config.aws_bucket, // Passes to view to set as vars
                        aws_key: config.aws_key,
                        redirect_host: config.redirect_host,
                        bucket_dir: config.bucket_dir,
                        host: config.host});
};
``
exports.signed = function(req, res){
  /* JSON View for obtaining CORS policy, signature, key, redirect and mime-type, then signs policy as a sha1 digest */

  var mime_type = mime.lookup(req.query.title); // Uses node-mime to detect mime-type based on file extension
  var expire = moment().utc().add(1, 'hour').toJSON("YYYY-MM-DDTHH:mm:ss Z"); // Set policy expire date +30 minutes in UTC
  var file_key = uuid.v4(); // Generate uuid for filename

  // Creates the JSON policy according to Amazon S3's CORS uploads specfication (http://aws.amazon.com/articles/1434)
  var policy = JSON.stringify({
                "expiration": expire,
                  "conditions": [
                    {"bucket": config.aws_bucket},
                    ["eq", "$key", config.bucket_dir + file_key + "_" + req.query.title],
                    {"acl": "public-read"},
                    {"success_action_status": "201"},
                    ["starts-with", "$Content-Type", mime_type],
                    ["content-length-range", 0, config.max_filesize]
                  ]
                });

  var base64policy = new Buffer(policy).toString('base64'); // Create base64 policy
  var signature = crypto.createHmac('sha1', config.aws_secret).update(base64policy).digest('base64'); // Create signature

  // Return karo  JSON View
  res.json({ policy: base64policy,
             signature: signature,
             key: config.bucket_dir + file_key + "_" + req.query.title,
             success_action_redirect: "/",
             contentType: mime_type
          })
          var url = "http://large-file-upload-two.s3.amazonaws.com/" + config.bucket_dir + file_key + "_" + req.query.title ;
          var filenameFull =req.query.title ;
          console.log(url);
          var filenameText = filenameFull.replace(/\.[^/.]+$/, "");
          console.log(filenameText);

//SQL Main Insert hoga name aur link
let post = {title: filenameText , url : url, status: 1 , user_id : 210 };
    let sql = 'INSERT INTO uploadvideos SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('file  added...');
    });





}


exports.geturl = function(req, res){
var final_url= mime.lookup(req.query.url1);

console.log(final_url);


};
