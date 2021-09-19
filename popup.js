document.addEventListener('DOMContentLoaded', documentEvents  , false);

function myAction(input) {
    console.log("input value is : " + input.value);
    alert("The entered data is : " + input.value);

}

function documentEvents() {
  document.getElementById('search1').addEventListener('click',
    function() {
      var inputF =  document.getElementById("name_textbox").value.trim().replace(" ","_");

    document.getElementById("i1").src="https://sstravelbuddy.herokuapp.com/?search="+inputF;
  const targetDiv = document.getElementById("loader");
    targetDiv.style.display = "block";

  });
  document.getElementById('search2').addEventListener('click',
    function() {   var inputF =  document.getElementById("name_textbox").value.trim().replace(" ","_");

    document.getElementById("i2").src="https://sstravelbuddy.herokuapp.com/vaccine/?search="+inputF;
      const targetDiv = document.getElementById("loader2");
      targetDiv.style.display = "block";
  });

}
