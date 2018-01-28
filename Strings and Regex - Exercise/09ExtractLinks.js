function extractLinks(input) {

    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g; ///www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)*/g;
    let match;
    let result = [];
    for (let item of input) {
        while (match = regex.exec(item)) {
            result.push(match[0]);
        }
    }
    console.log(result.join("\n"));
}
extractLinks(['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:', 'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko ']);