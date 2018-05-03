export function submitScore(name: string, score: number, level: number):void {
    var url = window.location.href + 'submitScore';
    var data = {Name: name, Score: score, Level: level};

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}