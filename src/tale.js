//хадание 1

console.log('дедушка' + ': ' + kolobok('дедушка'));
console.log('заяц', kolobok('заяц'));
console.log('лиса', kolobok('лиса'));
console.log('колдун', kolobok('колдун'));

function kolobok(heroNme) {
    switch(heroNme) {
        case 'дедушка':
        return 'Я от дедушки ушёл';
        break;      
        case 'заяц':  
        return 'Я от зайца ушёл';
        break;
        case 'лиса':  
        return 'Меня съели';
        break;      
        default:
        return'Такого в сказке не было';
      }
}

//задание 2

console.log(newYear('Дед Мороз'))
console.log(newYear('Снегурочка'))

function newYear(heroName) {
        return `${heroName}! ${heroName}! ${heroName}!`
    }