const googleTrends = require('google-trends-api');

googleTrends.relatedTopics({keyword: 'Politics', geo: 'US', category: '396', startTime: new Date('2019-01-01'), endTime: new Date('2019-01-26')})
.then((res) => {

var i,j;
var obj = JSON.parse(res);
var rankedList = obj.default.rankedList;

for (i in rankedList){
  var rankedKeyword = rankedList[i].rankedKeyword;
  for (j in rankedKeyword){
    console.log(rankedKeyword[j].topic.title);
  }
}
})
.catch((err) => {
  console.log(err);
})
