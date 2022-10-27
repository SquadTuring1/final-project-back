const ErrorHandler = (error, req, res, next) => {
  const errorStatus = 500;
  const errorMessage = error.message;

  res.status(errorStatus).send({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: process.env.NODE_ENV === "development" ? error.stack : {},
  });
};

export default ErrorHandler;
