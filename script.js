//validating day, year and month


// validating year, month, date and gender

function akanNames(){

    var currentYear = new Date();
    var maxYear = currentYear.getFullYear();
    var year = document.getElementById("year").value;
    var day = document.getElementById("day");
    var month = document.getElementById("month");
    var gender = document.getElementById("gender");
    if  (year > maxYear || year < 1919 ){
      alert("Invalid year");
      document.getElementById("year").value = document.getElementById("year").value.replace(characters, "");
    }else if( day.value > 31 ){
      alert("Invalid date!");
      return false
  
    }else if(month.value > 12){
      alert("Invalid month!");
      return false
  
    }else {
      if(gender===""){
        alert("choose gender!");
        return false
      };
    }
  } 

  //determining the name using gender and input date

  function calc(){
    var cc = parseInt(document.getElementById("year").value.slice(0,2));
    var yy = parseInt(document.getElementById("year").value.slice(2,4));
    var mm = parseInt(document.getElementById("month").value);
    var dd = parseInt(document.getElementById("day").value);
    var gender = parseInt(document.getElementById("gender").value);
    var day = (((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7 ;
    var d = parseInt(day.toFixed());

    if (gender === 1){
        if (d === 0){
          alert("Your Akan name is Kwasi");
        }
        else if (d === 1){
          alert("Your Akan name is Kwadwo");
        }
        else if (d === 2){
          alert("Your Akan name is Kwabena");
        }
        else if (d === 3){
          alert("Your Akan name is Kwaku");
        }
        else if (d === 4){
          alert("Your Akan name is Yaw");
        }
        else if (d === 5){
          alert("Your Akan name is Kofi");
        }
        else {
          alert("Your Akan name is Kwame");
        }
      }
  