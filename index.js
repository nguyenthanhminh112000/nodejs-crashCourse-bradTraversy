const Logger = require('./logger.js');

const logger = new Logger();

logger.on('message', (data) => {
  console.log('This is the data: ', data);
});
logger.log('Nguyen Thanh Minh 1');
logger.log('Nguyen Thanh Minh 2');
logger.log('Nguyen Thanh Minh 3');
