export default () => ({
	SERVER_PORT: process.env.SERVER_PORT,
	BCRYPT_SALT: process.env.BCRYPT_SALT,
	JWT_SECRET: process.env.JWT_SECRET,
});
