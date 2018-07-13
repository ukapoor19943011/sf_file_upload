// All configuration options

module.exports.port = process.env.PORT || 3000; // App's port
module.exports.aws_key = process.env.AWS_KEY || "AKIAJFUFN7UPAJ56RNUQ"; // AWS Key
module.exports.aws_secret = process.env.AWS_SECRET || "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"; // AWS Secret
module.exports.aws_bucket = process.env.AWS_BUCKET || "large-file-upload-two"; // AWS Bucket
module.exports.redirect_host = process.env.REDIRECT_HOST || "http://localhost:3000/"; // Host to redirect after uploading
module.exports.host = process.env.HOST ||  "s3.amazonaws.com"; // S3 provider host
module.exports.bucket_dir = process.env.BUCKET_DIR || "uploads/";
module.exports.max_filesize = 2097152000; // Max filesize in bytes (default 20MB)
