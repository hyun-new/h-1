function search1 (){
  var inputF =  document.getElementById("name_textbox").value.trim().replace(" ","_");

  document.getElementById("i1").src="https://sstravelbuddy.herokuapp.com/?search="+inputF;
const targetDiv = document.getElementById("loader");
  targetDiv.style.display = "block";
}
function search2 (){
  var inputF =  document.getElementById("name_textbox").value.trim().replace(" ","_");

document.getElementById("i2").src="https://sstravelbuddy.herokuapp.com/vaccine/?search="+inputF;
  const targetDiv = document.getElementById("loader2");
  targetDiv.style.display = "block";
}
