// setting variables
var request = require('request');
var fs = require('fs');
var GITHUB_USER = 'max-bergen';
var GITHUB_TOKEN = 'ad9659316c50dd84c30d6c4d50c798cbbb16c0fe';
var USER_AGENT = 'GitHub Avatar Downloader - Student Project';
var owner = process.argv[2];
var name = process.argv[3];
// intial greeting
console.log('Welcome to the GitHub Avatar Downloader!');
// takes url and path as input and redirects url as fil into said path
function downloadImageByURL(url, filePath) {
  request.get(url)
  .pipe(fs.createWriteStream(filePath));
}
// takes owner, name, and a callback function as inputs and builds a request
function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    'url': requestURL,
    'headers': {
      'User-Agent': USER_AGENT
    }
  };
  // gathers data from url and converts it into a readable object and extracts nessecary data
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
// if input is invalid it tells the user to try again
if (owner && name){
  getRepoContributors(owner, name, function(err, result){
  console.log('Errors:', err);
  console.log('Result:', result);
  });
} else {
  console.log('get up on outta here with my Eyeholes');
}

