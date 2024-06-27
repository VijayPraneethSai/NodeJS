// for a custom error object
//making an extended error object
class CustomError extends Error{
      constructor(message){
        super(message);
      }
}

module.exports = {CustomError};
