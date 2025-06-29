const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err};
    error.message = err.message;
    console.error(err);

    if(err.name === 'CastError') {
      error.message = 'Resource not found';
      error.status = 404;
    }

    if(err.code === 11000) {
      error.message= "Duplicate field value entered";
      error.status = 400;
    }

    if(err.name === 'ValidationError') {
      error.message = Object.values(err.errors).map(val => val.message).join(',');
      error.status = 400;
    }
    res.status(error.status || 500).json({ success: false, error: error.message || 'Server Error'});
  } catch(error) {
    next(error);
  }
};

export default errorMiddleware;