function findDay(){
let dayElement = document.getElementById('day').value;
let sonuc;
let showDay = document.getElementByID('gun');

if(dayElement == 1){
    sonuc = "Monday";
}else if (dayElement == 2){
    sonuc = "Tuesday";
} else if (dayElement == 3){
    sonuc = "Wednesday";
}else if (dayElement == 4){
    sonuc = "Thuersday";
}else if (dayElement == 5){
    sonuc = "Friday";
}else if (dayElement == 6){
    sonuc = "Saturday";
}else if (dayElement == 7){
    sonuc = "Sunday";
}

else{
    showDay.innerHTML = "<span style='color:red;'> Invalid Value </span>" 
    return;
}
    showDay.innerHTML = "Day:" + sonuc; 
    
}
