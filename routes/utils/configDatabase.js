var CONFIG_DATABASE = function(){
  const TYPE_DATABASE = "mongodb";
  const HOST = "localhost";
  const PORT = "27017";
  const DATABASE = "PIPO";

  var getUrlConnection = function(){
    return TYPE_DATABASE + "://" + HOST + ":" + PORT + "/" + DATABASE; 
  };

  return { urlConnection: getUrlConnection }

}();

module.exports = CONFIG_DATABASE;