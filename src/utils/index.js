// todo.day ISO
const CONST_GET_M = ['DDMMMMYY','YYMMMMDD','DDMMYYYY', 'YYYYMMDD', 'YYMMDD', 'DDMMMYY', 'DMMMMYYYY', 'DDMMYY', 'YYMMMDD', 'YYYYMMMMD', 'YYYYMMMDD','YYYYMMMMDD', 'DDMMMYYYY', 'DDMMMMYYYY'];
const CONST_GET_D = ['MMMMDDYY','MMMMDDYYYY','MDYYYY', 'MDYY', 'MMDDYY', 'MMDDYYYY', 'MMMMDYYYY', 'MMMDDYYYY', 'MMMDDYY']
const CONST_WEEK_DAY_NAME = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const CONST_MONTH_31DAY = [1, 3, 5, 7, 8, 10, 12];
const CONST_MONTH_28DAY = 2;
const CONST_MONTH_30DAY = [4, 6, 9, 11];

export function formatDate(format, input = new Date) {
    let seperate1;
    let seperate2;
    const rgexD_M_Y1 = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
    const rgexD_M_Y2 = /^([0-2][0-9]|(3)[0-1])(.)(((0)[0-9])|((1)[0-2]))(.)\d{4}$/i;
    const rgexD_M_Y3 = /^([0-2][0-9]|(3)[0-1])(,)(((0)[0-9])|((1)[0-2]))(,)\d{4}$/i;
    const rgexD_M_Y4 = /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/i;

    if (rgexD_M_Y1.test(input) || rgexD_M_Y2.test(input) || rgexD_M_Y3.test(input) || rgexD_M_Y4.test(input)) {
        if (input.includes('/'))
            input = input.split('/').reverse().join('-');

        else if (input.includes(','))
            input = input.split(',').reverse().join('-');

        else if (input.includes('.'))
            input = input.split('.').reverse().join('-');

        else if (input.includes('-'))
            input = input.split('-').reverse().join('-');

        else if (input.includes(' '))
            input = input.split(' ').reverse().join('-');
    }
    else {
        if (input.includes('/'))
            input = input.split('/').join('-');

        else if (input.includes(','))
            input = input.split(',').join('-');

        else if (input.includes('.'))
            input = input.split('.').join('-');

        else if (input.includes('-'))
            input = input.split('-').join('-');

        else if (input.includes(' '))
            input = input.split(' ').join('-');
    }

    let index;
    let formatD = '';
    let formatM = '';
    let formatY = '';

    let resultD = '';
    let resultM = '';
    let resultY = '';

    let numD;
    let numM;
    let numY;

    let arr1 = format.split('').map(item => {
        return item.toUpperCase();
    });

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === 'D') {
            numD = i;
            formatD += arr1[i];
        } else if (arr1[i] === 'M') {
            numM = i;
            formatM += arr1[i];
        } else if (arr1[i] === 'Y') {
            numY = i;
            formatY += arr1[i];
        }
    } // for

    format = arr1.filter(item => {
        return item !== '/' && item !== '.' && item !== ',' && item !== '-' && item !== ' ';
    }).join('').toUpperCase();

    const mLength = CONST_GET_M.length;
    const dLength = CONST_GET_D.length;

    for (let i = 0; i < mLength; i++) {
        if (format === CONST_GET_M[i])
            index = arr1.indexOf('M');
    }
    for (let i = 0; i < dLength; i++) {
        if (format === CONST_GET_D[i])
            index = arr1.indexOf('D');
    }

    const arr2 = arr1.slice(index);

    arr1 = arr1.splice(0, index);

    seperate1 = arr1.filter(item => {
        return item === '/' || item === '.' || item === ',' || item === '-' || item === ' ';
    }).join('');

    seperate2 = arr2.filter(item => {
        return item === ' ' || item === '-' || item === '/' || item === ',' || item === '.';
    }).join('');

    const time = new Date(input);
    const yearLong = time.getFullYear();
    const yearShort = yearLong.toString().slice(2);
    const month = time.getMonth() + 1;
    const monthString = month.toString().padStart(2, 0);
    const date = time.getDate();
    const dateString = date.toString().padStart(2, 0);
    const nameMonthShort = time.toLocaleDateString('en-US', { month: 'short' });
    const nameMonthLong = time.toLocaleDateString('en-US', { month: 'long' });

    if (formatD === 'D') {
        resultD = date;
    } else if (formatD === 'DD') {
        resultD = dateString;
    } else if (formatD === 'DDD') {

    } else if (formatD === 'DDDD') {

    }

    if (formatM === 'M') {
        resultM = month;
    } else if (formatM === 'MM') {
        resultM = monthString;
    } else if (formatM === 'MMM') {
        resultM = nameMonthShort;
    } else if (formatM === 'MMMM') {
        resultM = nameMonthLong;
    }

    if (formatY === 'YY') {
        resultY = yearShort;
    } else if (formatY === 'YYYY') {
        resultY = yearLong;
    }

    if (numD < numM && numD < numY)
        return `${resultD}${seperate1}${resultM}${seperate2}${resultY}`;

    else if (numD > numM && numD > numY)
        return `${resultY}${seperate1}${resultM}${seperate2}${resultD}`;

    else if (numM < numD && numM < numY)
        return `${resultM}${seperate1}${resultD}${seperate2}${resultY}`;

    // part/ portion
} // formatDate

export function getWeekdayName(input = new Date) {
    const time = new Date(input);
    const day = time.getDay();

    return CONST_WEEK_DAY_NAME[day];
} // getWeekdayName

export function getCurrentTime_ISOformat() {
    const newTime = new Date();
    const minutes = newTime.getMinutes();
    const hours = newTime.getHours();
    const date = newTime.getDate();
    const month = newTime.getMonth() + 1;
    const year = newTime.getFullYear();
    const second = newTime.getSeconds();
    const help = item => item.toString().padStart(2, '0');

    return `${help(year)}-${help(month)}-${date}T${help(hours)}:${help(minutes)}:${help(second)}`;
} // getCurrentTime_ISOformat

export function getDateParts(input = new Date()) {
    const newTime = new Date(input);
    const day = newTime.getDate();
    const month = newTime.getMonth() + 1;
    const year = newTime.getFullYear();

    return {
        year,
        month,
        day
    }

} // getDateParts

export function getTotalDaysDifferent(fromDate, toDate) {
    const secondsInADay = 24 * 60 * 60;
    const stampOfToday = (new Date(formatDate('YYYY-MM-DD', fromDate))).getTime();
    const stampOfInput = (new Date(formatDate('YYYY-MM-DD', toDate))).getTime();
    const deltaInSeconds = (stampOfInput - stampOfToday) / 1000;

    return Math.ceil(deltaInSeconds / secondsInADay);
} // getTotalDaysDifferent

//#region
// getDeadline = getDateDifferent(input)


export function foo(date1, date2) {
    const { year: y1, month: m1, day: d1 } = date1;
    const { year: y2, month: m2, day: d2 } = date2;

    const diffTeller = (part, diff) => (
        diff > 1 ?
            `${diff}${part}s` :
            diff === 1 ?
                `${diff}${part}` :
                ''
    ) // diffTeller

    let diffY = y2 - y1;
    let diffM = m2 - m1;
    let diffD = d2 - d1;

    if (m2 < m1 || d2 < d1) {
        diffY = Math.max(0,   1);
        diffM = m2 + 12 - m1;
    } // if

    return `${diffTeller('year', diffY)} ${diffTeller('month', diffM)} ${diffTeller('day', diffD)}`;
}
//#endregion

export function getDateDifferent(input) {
    const { day: inputD, month: inputM, year: inputY } = getDateParts(formatDate('YYYY-MM-DD', input));
    const { day: todayD, month: todayM, year: todayY } = getDateParts(); // property alias

    // totalDaysDifferent
    let diffYears;
    let diffMonths;
    let diffDays;

    //#region count year, month, day.
    diffYears = (inputY - todayY);

    if (inputM >= todayM)
        diffMonths = inputM - todayM;
    else {
        diffMonths = 12 + inputM - todayM;
        diffYears -= 1;
    }

    diffDays = inputD - todayD;

    if (inputD - todayD < 0 && inputM == todayM) {
        diffYears -= 1;
        diffMonths += 11;

        CONST_MONTH_31DAY.forEach(item => {

            if (inputM == item)
                diffDays += 31;

            else if (inputM == CONST_MONTH_28DAY) {
                diffDays += 28;
            }
        }); // forEach

        CONST_MONTH_30DAY.forEach(item => {
            if (inputM == item) {
                diffDays += 30;
            }
        }); //forEach

    } else if (inputD - todayD >= 0)
        diffDays = inputD - todayD;
    else {
        CONST_MONTH_31DAY.forEach(item => {
            if (todayM == item) {
                diffDays += 31;

                if (diffMonths <= 0) {
                    diffMonths += 11;
                    diffYears -= 1;
                } else
                    diffMonths -= 1;

            } else if (todayM == CONST_MONTH_28DAY) {
                diffDays += 28;
                diffMonths -= 1;
            }
        }); // forEach
        CONST_MONTH_30DAY.forEach(item => {
            if (todayM == item) {
                diffDays += 30;
                diffMonths -= 1;
            }
        }); //forEach
    } // else 

    // leap year
    for (let i = todayY; i <= inputY; i++) {
        if (i % 4 == 0) {
            diffYears += 1;
        }
    } 
    // #endregion count year, month, day.

    const diffDaysTotal = getTotalDaysDifferent(getCurrentTime_ISOformat(), `${inputY}-${inputM}-${inputD}`);

    const text =
        diffDaysTotal == -1 ?
            'Yesterday' :
            diffDaysTotal == 0 ?
                '' :
                diffDaysTotal == 1 ?
                    'Tomorrow' :
                    diffDaysTotal <= 6 ?
                        `${diffDaysTotal} day` :
                        diffDaysTotal == 7 ?
                            `Next ${getWeekdayName()}` :
                            `${diffYears <= 0 ? '' : `${diffYears} year`} ${diffMonths <= 0 ? '' : `${diffMonths} month`} ${diffDays <= 0 ? '' : `${diffDays} day`}`

    return {
        totalDays: diffDaysTotal,
        text
    }
} 

export function moveItem(arr, fromIndex, toIndex) {
    const item = arr.at(fromIndex);

    // remove item from current location
    arr.splice(fromIndex, 1);
    // insert toIndex
    arr.splice(toIndex, 0, item);

    return arr;
} // moveItem

