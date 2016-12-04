const SRC_PATH = require('../srcPath');
const CONFIG = function() {
    const IP_SERVER = "localhost";
    const PORT = "3000";
    const IMAGE_PROFILE = "/images/profile/";
    const IMAGE_EVENT = "/images/event/"
    
    var getIpAddress = function() {
        return "http://" + IP_SERVER + ":"+ PORT;
    };

    var getPathImageUser = function(){
        return SRC_PATH + IMAGE_PROFILE;
    };

    var getPathImageTicket = function(){
        return SRC_PATH + IMAGE_EVENT;
    }

    return {
        getIpAddress: getIpAddress,
        getPathImageUser:getPathImageUser,
        getPathImageTicket: getPathImageTicket
    }
}();

module.exports = CONFIG;