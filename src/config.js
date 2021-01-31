module.exports = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://dunder_mifflin@localhost/eyesite',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://dunder_mifflin@localhost/eyesite_test',
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
      "http://localhost:8000/api",
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN_URL
}