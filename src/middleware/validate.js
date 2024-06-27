const validate = (data, schema) => {
    const { error } = schema.validate(data);
    if (error) throw new Error(error.details[0].message);
  };
  
  module.exports = validate;
  