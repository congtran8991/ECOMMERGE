const isPhone = (str) => {
  str = str + "";
  if (str.length > 11 || str.length < 10) return false;
  return Number.isInteger(+str);
};

const isEmail = (str) => {
  return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.['a-z0-9!#$%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
    str
  );
};

const isValidUserName = (str) => {
  return str.length > 7 && str.length < 16;
};

const isValidPassWord = (str) => {
  return str.length > 7 && str.length < 20;
};

const sendSuccess = (ctx, message, data = []) => {
  return ctx.send({
    code: 200,
    message: message,
    data,
    status: true
  });
};

const sendFailed = (ctx, message, data = []) => {
  return ctx.send({
    code: 400,
    message,
    data,
    status: false
  });
};

module.exports = {
  isPhone,
  isEmail,
  isValidUserName,
  isValidPassWord,
  sendSuccess,
  sendFailed
};
