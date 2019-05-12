const loggerConfig = {
  logLevel: 'debug',
};

namespace LogService {
  const loggerInstance = async () => {
    const { format, transports, createLogger } = await import('winston');
    console.log(
      'heyo 3: ',
      typeof createLogger,
      typeof format,
      typeof transports,
    );
    const logger = createLogger({
      level: loggerConfig.logLevel,
      format: format.combine(format.splat(), format.simple()),
      transports: [
        new transports.Console({
          format: format.simple(),
        }),
      ],
    });
    return logger;
  };

  export const getLogger = async () => {
    const logger = await loggerInstance();
    console.log('TCL: getLogger -> logger', logger);
    return logger;
  };
}

// console.log("TCL: loggerInstance -> loggerInstance", loggerInstance)

// const getLogger = () => {
//   console.log('TCL: getLogger -> loggerInstance', loggerInstance);
//   return loggerInstance;
// };

export { LogService };
