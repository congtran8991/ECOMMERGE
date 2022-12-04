module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/abc', // Only match when the URL parameter is composed of lowercase letters
        handler: 'category.findByCategory2',
      }
    ]
  }