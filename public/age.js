 
  var year = document.getElementById("year"); //try and get into the habit of using 'let' or 'const' for variables instead of 'var'
  var currentYear = (new Date()).getFullYear();
  for (var i = 1900; currentYear >= i ; currentYear--)
  {
      var option = document.createElement("OPTION");
      option.innerHTML = currentYear;
      option.value = currentYear;
      year.appendChild(option);
  }

  var day= document.getElementById("date");
  for (var j = 1; j <= 31 ; j++)
  {
      var option = document.createElement("OPTION");
      option.innerHTML = j;
      option.value = j;
      day.appendChild(option);
  }

   function dispMonth()
   {
     
    arrAllMonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var month= document.getElementById("month");
    for (var k = 1; k <= arrAllMonth.length ; k++)
    {
        var option = document.createElement("OPTION");
        option.innerHTML = arrAllMonth[k-1];
        option.value = k;
        month.appendChild(option);
    }
   }

    function updateMonth()
    { 
      var arr31Month =[];
      arr31Month.length=0;
      
      let x=document.getElementById("date").value;
      let y=document.getElementById("month");
      
      y.innerHTML="";
      if(x==31)
      {
        arr31Month = ["Jan","Mar","May","Jul","Aug","Oct","Dec"];
        var month= document.getElementById("month");
        for (var k = 1; k <= arr31Month.length ; k++)
        {
          var option = document.createElement("OPTION");
          option.innerHTML = arr31Month[k-1];
          if(k==1) //there is probably a more efficient way to do these checks, but this works :)
          {
            option.value = k;
          }
          if(k==2)
          {
            option.value = k+1;
          }
          if(k==3)
          {
            option.value = k+2;
          }
          if(k==4)
          {
            option.value = k+3;
          }
          if(k==5)
          {
            option.value = k+3;
          }
          if(k==6)
          {
            option.value = k+4;
          }
          if(k==7)
          {
            option.value = k+5;
          }

          month.appendChild(option);
        }
      }
      if(x>=1 && x<=30) //will let you choose 30th Feb
      {
        y.innerHTML="";
        arrAllMonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var month= document.getElementById("month");
        for (var k = 1; k <= arrAllMonth.length ; k++)
        {
          var option = document.createElement("OPTION");
          option.innerHTML = arrAllMonth[k-1];
          option.value = k;
          month.appendChild(option);
        }
      }
} 

    function calcAge()
    {
      date = new Date();
    
      let year1  = document.getElementById("year").value;
      let month1 = document.getElementById("month").value;
      let day1 = document.getElementById("date").value;

      //have a look at moment.js for some prebuilt date functions that may help here too

      year = date.getFullYear()-year1;
      month = (date.getMonth()+1)-month1;
      day = (date.getDate()) - day1;

      console.log(year,month,day);


    
      // if((year<=0 && month<0 && day<0) || (year<=0 && month<0 && day<=0) || (year<=0 && month<=0 && day<0) || (year<=0 && month<=0 && day>0))
      if(year<=0 && month<=0 && day<0)
      {
        console.log("Condition 1");
        document.getElementById("dispAge").style.color="white";
        document.getElementById("dispAge").innerHTML="Not Yet Born";
      }
    else
    {
      
    if(day>=0 && month>=0)
    {
      console.log("condition 2");
      year = year;
      month = month;
      day = day;
    }

    if(day==0 && month<0)
    {
      year=year;
      month=month+12;
      day = day;
      console.log("condition 3");
    }

    if(day<0 && month<0)
    {
      console.log("condition 4");
      year = year-1;
      month = month+11;
      day = day+30;
    }

    if(day<0 && month==0)
    {
      console.log("condition 5");
      year=year-1;
      month = month+11;
      day = day + 30 ;
    } 

    if(day<0 && month>0)
    {
      console.log("Condition 6");
        year=year;
        month=month-1;
        day=day+30;
    }

    if (month<0 && day>0)
    {
        console.log("Condition 7");
        year = year-1;
        month = month + 12;
        day = day;
    }

      var dispYear = "Years";
      var dispMonth = "Months";
      var dispDay = "Days";
      if (year<=1)
      {
        dispYear = "Year";
      }
      if(month<=1)
      {
        dispMonth = "Month";
      }
      if(day<=1)
      {
        dispDay = "Day";
      }

      if (day ==0 && month == 0)
      {
        document.getElementById("dispAge").style.color="white"; 
        document.getElementById("dispAge").innerHTML="Just Born Today";   
      }
      else
      {
        document.getElementById("dispAge").style.color="white"; 
        document.getElementById("dispAge").innerHTML=year + " " + dispYear + " " + month + " " + dispMonth + " " + day + " " + dispDay;   
      }
      
}

    }
function displayNameDate(){
  var dispName = localStorage.getItem("fName");
  document.getElementById("name").innerHTML=`Welcome  -  ${dispName}`;
}
