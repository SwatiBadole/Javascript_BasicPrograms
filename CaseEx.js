let text;
switch(new Date().getDay()){
    case 0:text="sunday";
           break;
           case 1:text="monday";
           break;
           case 2:text="Tue";
           break;
           case 3:text="wed";
           break;
           case 4:text="Thu";
           break;
           case 5:text="fri";
           break;
           case 6:text="sat";
           break;
           default:
               text="whatever";
}
console.log("today is "+ text);