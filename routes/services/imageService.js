var pipoLogger = require('../utils/pipoLogger');
var fs = require('fs');
var easyimg = require('easyimage');
var CONSTANTS = require('../utils/constants');
var imageService = function() {
    var getImageWithPath = function(res, pathFile) {
        var img = fs.readFileSync(pathFile);
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(img);
    };

    var postImageWithPath = function(req, res, pathFile, width, height, pathContent, typeImage) {
        console.log(req.file);
        var fileName = req.file.filename;
        var path = req.file.path;
        pipoLogger.log("Path: " + path);
        fs.readFile(path, function(err, data) {
            let unix = Math.round(+new Date() / 1000);
            let newFileName = fileName + "-" + unix + ".jpg";
            pipoLogger.log(newFileName);
            let newPath = pathFile + newFileName;
            easyimg.rescrop({
                src: path,
                dst: newPath,
                width: width,
                height: height
            }).then(
                function(image) {
                    console.log('Resized and cropped: ' + image.width + ' x ' + image.height);
                    fs.unlink(path);
                    res.json({
                        status: 200,
                        message: "Upload image successfully",
                        url: pathContent + newFileName
                    })
                },
                function(err) {
                    console.log(err);
                }
            );
        });
    }
    return {
        getImageWithPath: getImageWithPath,
        postImageWithPath: postImageWithPath
    }
}();
module.exports = imageService;