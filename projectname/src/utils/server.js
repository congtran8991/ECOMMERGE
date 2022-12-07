const isPhone = (str) => {
    str = str + ""
    if (str.length > 11 || str.length < 10) return false
    return Number.isInteger(+str)
}

const isEmail = (str) => {
	return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.['a-z0-9!#$%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
		str
	);
};

const isValidateUserName = (str) => {
    return str.length > 7 && str.length < 16
} 

const isValidatePassWord = (str)=> {
    return str.length > 7 && str.lenght < 20
}

module.exports = {
   isPhone,
   isEmail,
   isValidateUserName,
   isValidatePassWord
}