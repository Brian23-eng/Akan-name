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