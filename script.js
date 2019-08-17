//validating the form


function akanNames(){
    var date = document.getElementById("days");
    var year = document.getElementById("years");
    var month = document.getElementById("months");
    var gender = document
  
    //validate
  
    if(date.value <=0 || date.value>31){
      alert("invalid date!");
      // return false;
  
    }else if(month.value <=0 || month.values >12){
      alert("invalid month!");
      // return false;
  
    }else{
      if(year.value>2019){
      alert("Incorrect year!");
      // return false;
      }
    }
  }