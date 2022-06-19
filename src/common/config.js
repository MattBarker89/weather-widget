export const getConfigValue = (key) => {
  let value;
  try {
    value = process.env[key];
    if (!value) {
      throw new Error(`missing environment variable '${key}'`);
    }
  } catch (e) {
    throw new Error(`config error ${e.message}`);
  }
  return value; 
};