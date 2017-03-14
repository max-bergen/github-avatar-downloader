var request = require('request');
var GITHUB_USER = 'max-bergen';
var GITHUB_TOKEN = 'ad9659316c50dd84c30d6c4d50c798cbbb16c0fe';
var USER_AGENT = 'GitHub Avatar Downloader - Student Project';


console.log('Welcome to the GitHub Avatar Downloader!');

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
    console.log(avatarUrl);
    }
  });
};



getRepoContributors('jquery', 'jquery', function(err, result){
     console.log('Errors:', err);
     console.log('Result:', result);
});
