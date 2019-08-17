//validating day, year and month


function akanNames(){
    var date = document.getElementById("days");
    var year = document.getElementById("years");
    var month = document.getElementById("months");
  
    if(date.value <=0 || date.value>31){
      alert("invalid date!");
      return false;
  
    }else if(month.value <=0 || month.value >12){
      alert("invalid month!");
       return false;
  
    }else{
      if(year.value>2019){
      alert("Incorrect year!");
      return false;
      }
      //validating gender

      var male = document.getElementById("males");
      var female = document.getElementById("females");
    }if (male.checked== false && female.checked== false){
        alert("Choose gender!");
        return false;
    }
  }