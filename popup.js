document.addEventListener('DOMContentLoaded', documentEvents  , false);

function myAction(input) { 
    console.log("input value is : " + input.value);
    alert("The entered data is : " + input.value);

}

function documentEvents() {    
  document.getElementById('ok_btn').addEventListener('click', 
    function() { myAction(document.getElementById('name_textbox'));
  });


}