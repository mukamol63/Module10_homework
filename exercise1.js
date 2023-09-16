let date=+prompt('введите значение')
if (typeof date!== 'number' || isNaN(date)) {
    console.log ('упс, кажется, вы ошиблись');
} else if ( date % 2===0) {
    console.log ('четное')
} else {
    console.log ('нечетное')
}