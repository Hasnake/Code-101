var currentDate = new Date(),
day = currentDate.getDate(),
month = currentDate.getMonth() + 1,
year = currentDate.getFullYear();
document.write(+month + "/" + day + "/" + year)