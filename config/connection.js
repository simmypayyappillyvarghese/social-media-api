const { connect, connection } = require('mongoose');

connect('mongodb://localhost/social_media_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;