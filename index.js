var request = require('superagent');
var cookieParser = require('cookie');

var verifyImage = "http://tools.cloudxns.net/index/verify";
var url = "http://tools.cloudxns.net/Index/Around";
var thinkMethod = "http://tools.cloudxns.net/index/think";

request
    .get(verifyImage)
    .end(function (err, res) {
        var setCookieValue = res.headers['set-cookie'][0]
        var sessionID = cookieParser.parse(setCookieValue).PHPSESSID
        console.log(sessionID);

        request
            .post(thinkMethod)
            .set("Content-Type", "application/x-www-form-urlencoded")
            .set("Cookie", "PHPSESSID=9ld3vjjbpaatlllce8go3p7pf7")
            .set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36")
            .send({ verify: "zwku", show_verify: 1 })
            .end(function (err, res) {
                console.log("verify result: ", res)
            });
    });