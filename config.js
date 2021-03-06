const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.NODE_ENV = 'development';
  process.env.PORT = 5000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/classapp';
} else if (env === 'test') {
  process.env.PORT = 5000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/classapptest';
}
