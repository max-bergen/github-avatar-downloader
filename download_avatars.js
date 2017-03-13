var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var GITHUB_USER = 'max-bergen';
  var GITHUB_TOKEN = 'ad9659316c50dd84c30d6c4d50c798cbbb16c0fe'
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  console.log(requestURL);
}


// var GITHUB_USER = "max-bergen";
// var GITHUB_TOKEN = "ad9659316c50dd84c30d6c4d50c798cbbb16c0fe"
// var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';



getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log('Errors:', err);
  console.log('Result:', result);
});

