define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function submitScore(name, score, level) {
        var url = window.location.href + 'submitScore';
        var data = { Name: name, Score: score, Level: level };
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(function (res) { return res.json(); })["catch"](function (error) { return console.error('Error:', error); })
            .then(function (response) { return console.log('Success:', response); });
    }
    exports.submitScore = submitScore;
});
