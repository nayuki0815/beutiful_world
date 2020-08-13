
var request = require('request');

// これはダメだった。
// var api_key = '';

// ここにroom_id直指定
var room_id = '';

var message = 'きたきた！'; //投稿内容


var options = {
    url: 'https://api.chatwork.com/v2/rooms/'+room_id+'/messages',
    headers: {
        // ここにAPIキーを入れる
        'X-ChatWorkToken': ''
    },

    form: { body: message },
    json: true
};


request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
       console.log(body);
    }else{
        console.log('error: '+ response.statusCode);
    }
});
