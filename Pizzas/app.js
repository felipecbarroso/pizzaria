document.getElementById("unimoda").oninput=() =>{
var totalp = document.getElementById("peqmoda").value;
var totalm = document.getElementById("medmoda").value;
var totalg = document.getElementById("grdmoda").value;
var totalmoda = ((totalp * 31 + totalm*41 + totalg*52));
document.getElementById("totalmoda").innerText = totalmoda;
return totalmoda;
}
document.getElementById("uniatum").oninput=() =>{
var totalp = document.getElementById("peqatum").value;
var totalm = document.getElementById("medatum").value;
var totalg = document.getElementById("grdatum").value;
var totalatum = ((totalp * 31 + totalm*41 + totalg*52));
document.getElementById("totalatum").innerText = totalatum;
return totalatum;
}
document.getElementById("unicala").oninput=() =>{
var totalp = document.getElementById("peqcala").value;
var totalm = document.getElementById("medcala").value;
var totalg = document.getElementById("grdcala").value;
var totalcala = ((totalp*29 + totalm*36 + totalg*49));
document.getElementById("totalcala").innerText = totalcala;
return totalcala;
}
document.getElementById("unicali").oninput=() =>{
    var totalp = document.getElementById("peqcali").value;
    var totalm = document.getElementById("medcali").value;
    var totalg = document.getElementById("grdcali").value;
    var totalcali = ((totalp*31 + totalm*41 + totalg*52));
    document.getElementById("totalcali").innerText = totalcali;
    return totalcali;
}

document.getElementById("button").onclick=() =>{
var total = (totalmoda + totalatum + totalcala + totalcali);
document.getElementById("total").innerText= total;
}