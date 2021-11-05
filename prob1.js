<!DOCTYPE html>
<html>
<body>

<h2>Use JavaScript to Change Text</h2>
<p>This example writes "Hello JavaScript!" into an HTML element with id="demo":</p>

<p id="demo"></p>

<script>
function countTs(a,b,c,d,e,f){
	var ts = 0;
    if(a==d||a==e||a==f){ts++}
    if(b==d||b==e||b==f){ts++}
    if(c==d||c==e||c==f){ts++}
    return ts;
}

function countPs(a,b,c,d,e,f){
	var ps = 0 ;
    if(a == d){ps++}
    if(b == e){ps++}
    if(c == f){ps++}
    return ps;
}

function con1(a,b,c){
	var ts = countTs(a,b,c,1,4,7);
    var ps = countPs(a,b,c,1,4,7);
	if(ts==1&&ps==0){return true;}
    return false;
}

function con2(a,b,c){
	var ts = countTs(a,b,c,1,8,9);
    var ps = countPs(a,b,c,1,8,9);
	if(ts==1&&ps==1){return true;}
    return false;
}

function con3(a,b,c){
	var ts = countTs(a,b,c,9,6,4);
    var ps = countPs(a,b,c,9,6,4);
	if(ts==2&&ps==0){return true;}
    return false;
}

function con4(a,b,c){
	var ts = countTs(a,b,c,5,2,3);
    var ps = countPs(a,b,c,5,2,3);
	if(ts==0&&ps==0){return true;}
    return false;
}

function con5(a,b,c){
	var ts = countTs(a,b,c,2,8,6);
    var ps = countPs(a,b,c,2,8,6);
	if(ts==1&&ps==0){return true;}
    return false;
}

for(var a = 0; a < 10; a++){
for(var b = 0; b < 10; b++){
for(var c = 0; c < 10; c++){

var result = false;
if(con1(a,b,c)&&con2(a,b,c)&&con3(a,b,c)&&con4(a,b,c)&&con5(a,b,c)){
	result = true;
}
if(result == true){
	document.getElementById("demo").innerHTML += a + "" +b + "" +c+" * ";
}

}}}


</script> 

</body>
</html>

