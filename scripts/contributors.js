var request = require('urllib-sync').request;

var repos = [
    {"owner": "pingcap", "repo": "tidb", "project": "TiDB"},
    {"owner": "tikv", "repo": "tikv", "project": "TiKV"},
    {"owner": "pingcap", "repo": "tispark", "project": "TiSpark"},
    {"owner": "pingcap", "repo": "pd", "project": "PD"},
    {"owner": "pingcap", "repo": "docs", "project": "Docs"},
    {"owner": "pingcap", "repo": "docs-cn", "project": "Docs-cn"},
    {"owner": "pingcap", "repo": "parser", "project": "Parser"}
];

console.log('![logo-contributors](https://user-images.githubusercontent.com/6755791/33357425-ff286f3a-d4fc-11e7-9ae8-b266e73f4aca.jpg)');
console.log();
console.log('This is the official list of people who can contribute');
console.log('(and typically have contributed) code to the TiDB/TiKV/TiSpark/PD/Docs/Docs-cn repository.');

for (var i = 0; i < repos.length; i++) {
    var owner = repos[i].owner, repo = repos[i].repo, project = repos[i].project;
    console.log();
    console.log('## '+project+' Contributors');
    console.log();
    for (var page = 1; ; page++) {
        var url = "https://api.github.com/repos/"+owner+"/"+repo+"/contributors?per_page=100&page="+page+"&anon=true";
        var res = request(url, {headers: {'User-Agent': 'request'}});
        if (res.status != 200) {
            console.error(JSON.parse(res.data));
            process.exit(1);
        }
        var data = JSON.parse(res.data);
        data.forEach(x => {
            if (x.type == 'User') {
                console.log('- \t['+x.login+']('+x.html_url+')');
            } else {
                console.log('- \t['+x.name+']('+x.email+')');
            }
        });
        if (data.length < 100) {
            break;
        }
    }
}

console.log();