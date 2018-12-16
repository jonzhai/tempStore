//判断是不是闰年
export const isLeapYear = (year) => {
    return year % 4 === 0 && year % 100 !== 0;
}

//判断某年某月有多少天
export const getMonthDays = (year, month) => {
    let days = 0;
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            if(isLeapYear(year)){
                days = 29;
            }else{
                days = 28;
            }
            break;
    }
    return days;
}

//获取某年某月第一天是星期几

export const getYearMonthDay = (year, month) => {
    let date = new Date(`${year}-${month}-01`);
    return date.getDay();
}