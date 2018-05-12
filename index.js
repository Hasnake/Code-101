var currentDate = new Date(),
day = currentDate.getDate(),
month = currentDate.getMonth() + 1,
year = currentDate.getFullYear();
hour=currentDate.getHours;
minute=currentDate.getMinutes;
document.write(+month + "/" + day + "/" + year)
document.write(+"/" +hour+"/"+minute+"/")