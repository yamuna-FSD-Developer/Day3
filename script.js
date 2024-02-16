var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
    var result = JSON.parse(request.response);
    var res = result.filter((cou)=>cou.name);
    var abc = res.map((cou)=>cou.region);
    var cfg = res.map((cou)=>cou.population);
    var ghi = res.map((cou)=>cou.subregion);
    var flg = result.map((cou)=>cou.flags);
    var flgs = flg.filter((cou)=>cou.png);
    var com = res.map((cou)=>cou.name);

console.log(res,com,abc,cfg,ghi,flgs);
}
