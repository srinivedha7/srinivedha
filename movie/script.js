function validateForm(){
    var title = document.forms["editMovie"]["title"].value;
    if(title==""){
     alert("Title is required");
     return false;
      }
    var titlelength = title.length;
    if(titlelength<2 || titlelength >100){
     alert("Title should have 2 to 100 characters");
     return false;
        }
    var gross = document.forms["editMovie"]["boxOffice"].value;
    if(isNaN(gross)){
    alert("Box Office has to be a number");
    return false;
        }
    if(gross==""){
    alert("Box Office is required");
    return false;
    }
    var category= document.forms["editMovie"]["category"].value;
if(category=="0"){
    alert("Select one genre");
    return false;
}
var dateOfLaunch = document.forms["editMovie"]["dateOfLaunch"].value;
if(dateOfLaunch==""){
    alert("Date of Launch is required");
    return false;
}
if(!dateOfLaunch.match(/^0[1-9]|[12][0-9]|3[01])[\-\/.}](?:(0[1-9]|1[012])[\-\/.])(19|20)[0-9]{2})$/)){
    alert("Incorrect data format.Expected format(dd/mm/yyyy)");
    return false;
}

}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table_id").deleteRow(i);
    document.getElementById("span").innerHTML="Movie removed from favorites"
    addColumn();
  }

function addColumn(){
    var totalrows = document.getElementById("table_id").rows.length;
    datarows=(totalrows-2);
    document.getElementById("val").innerHTML=datarows;
    if(datarows==0){
        window.open("favorites-empty.html");
    }
    
}
