
var request = require('request');
var fs = require('fs');
var GITHUB_USER = 'max-bergen';
var GITHUB_TOKEN = 'ad9659316c50dd84c30d6c4d50c798cbbb16c0fe';
var USER_AGENT = 'GitHub Avatar Downloader - Student Project';
var owner = process.argv[2];
var name = process.argv[3];

console.log('Welcome to the GitHub Avatar Downloader!');

function downloadImageByURL(url, filePath) {
  request.get(url)

    .pipe(fs.createWriteStream(filePath));
}

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    'url': requestURL,
    'headers': {
      'User-Agent': USER_AGENT
    }
  };
  request.get(options, function(err, response, body){
    if (err) throw err;
    var parsedBody = JSON.parse(body);
    for (var i in parsedBody){
      var avatarUrl = parsedBody[i].avatar_url;
      var avatarLogin = parsedBody[i].login;
      downloadImageByURL(avatarUrl, 'avatars/' + avatarLogin + '.jpg');
      }
  });
};

getRepoContributors(owner, name, function(err, result){
     console.log('Errors:', err);
     console.log('Result:', result);
});


