function dateDiff(startingDate, endingDate) {
    let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
    if (!endingDate) {
      endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
    }
    let endDate = new Date(endingDate);
    if (startDate > endDate) {
      const swap = startDate;
      startDate = endDate;
      endDate = swap;
    }
    const startYear = startDate.getFullYear();
    const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    let yearDiff = endDate.getFullYear() - startYear;
    let monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    let dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }
    return [yearDiff,monthDiff,dayDiff]
    // return yearDiff + 'Y ' + monthDiff + 'M ' + dayDiff + 'D';
  }

function convert(year,month,day) {
    var str = ""
    str += year 
    str += "-"
    str += month 
    str += "-"
    str += day 
    return str 
}

function getDOB() {
    var birth_date = document.querySelector("input").value
    birth_year = birth_date.slice(0,4) 
    birth_month = birth_date.slice(5,7) 
    birth_day = birth_date.slice(8,10) 
    var birthday = convert(birth_year,birth_month,birth_day)
    var curr_date = new Date()
    curr_year = curr_date.getFullYear() 
    curr_month = curr_date.getMonth() 
    curr_month++ 
    curr_day = curr_date.getDate() 
    curr_year = curr_year.toString()
    curr_month = curr_month.toString() 
    curr_day = curr_day.toString()
     if(curr_month.length == 1) {
        var str = "0" 
        str += curr_month 
        curr_month = str
    }
    if(curr_day.length == 1) {
        var str1 = "0" 
        str1 += curr_day 
        curr_day = str1
    }
    var currday = convert(curr_year,curr_month,curr_day)
    var x = dateDiff(birthday,currday)
    document.querySelector("h1").textContent = "How Much Life Journey You Have Covered, Till Now"
    document.querySelector("#IP").style.display = "none";
    document.querySelector(".after1 > h2").textContent = x[0].toString()
    document.querySelector(".after2 > h2").textContent = x[1].toString() 
    document.querySelector(".after3 > h2").textContent = x[2].toString() 
    document.querySelector(".after").style.display="flex"
}