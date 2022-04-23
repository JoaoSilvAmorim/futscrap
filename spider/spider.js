const wireMajor = require('./major/wireMajor');

const spider = async (page, {home}) => {
    

    switch (home) {
        case 'MAJOR':
            return await wireMajor(page);
    
        default:
            break;
    }
   
}


module.exports = spider;