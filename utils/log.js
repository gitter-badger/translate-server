const { format, createLogger, transports } = require('winston');

const config = require('../config');

// const logger = createLogger({
//   level: config.LOG_LEVEL,
//   format: format.combine(
//     format.timestamp({
//       format: 'YYYY-MM-DD HH:mm:ss'
//     }),
//     format.errors({stack: true}),

//     format.json()
//   ),
//   transports: [
//     new transports.File({filename: 'error.log', level: 'error'}),
//     new transports.File({filename: 'combined.log'})
//   ]
// });

// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new transports.Console({
//     format: format.combine(
//       format.colorize(),
//       format.simple()
//     )
//   }));
// }

const logger = createLogger({
  level: config.LOG_LEVEL,
  transports: new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  })
});

if (process.env.NODE_ENV === 'production') {
  logger.add(new transports.File({ filename: 'error.log', level: 'error' }));
}
module.exports = logger;


