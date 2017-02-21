require('babel-register');
require('isomorphic-fetch');

process.env.NODE_ENV = process.argv[2] === 'dev' ? 'development' : 'production';

if(process.env.NODE_ENV === 'development') {
    global.LISTEN_PORT = 3000;
    global.CONTENT_PORT = LISTEN_PORT + 1;
    global.CLIENT_JS_PATH = `http://localhost:${CONTENT_PORT}/client-bundle.js`;
    global.DATA_ENDPOINT = `http://localhost:${LISTEN_PORT}/data`;
    require('./tools/dev-server.js');
}
else  {
    global.LISTEN_PORT = process.env.PORT || 80;
    global.CLIENT_JS_PATH = `/js/${require('./assets.json').mainJs}`;
    global.DATA_ENDPOINT = 'http://car-catalogue-prod.com/data'; // if we had a domain
}

require('./src/server.js');
