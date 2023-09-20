const firstForm = document.querySelector('#first-form');
const secondForm = document.querySelector('#second-form');
const formBtn = document.querySelector('#formBtn');

let minValue;
let maxValue;

formBtn.addEventListener('click', () => {
  minValue = parseInt(firstForm.value);
  maxValue = parseInt(secondForm.value);
  isNaN(minValue) ? (minValue = NaN || -999) : minValue + 0;
  isNaN(maxValue) ? (maxValue = NaN || 999) : minValue + 0;

  minValue < -999 ? (minValue = -999) : minValue + 0;
  maxValue > 999 ? (maxValue = 999) : maxValue + 0;

  answerNumber = Math.floor((minValue + maxValue) / 2);
  if (answerNumber > 0) {
    arrAnsNumber = numToNumArr(answerNumber);
  } else if (answerNumber === 0) {
    arrAnsNumber = [0];
  } else if (answerNumber < 0) {
    arrAnsNumber = numToNagativeNumArr(answerNumber);
  }
  console.log(answerNumber);
  answerField.innerText = `Ваше число ${transformAnsArr(arrAnsNumber)}?`;
  orderNumber = 1;
  orderNumberField.innerText = orderNumber;
  console.log(minValue);
  console.log(maxValue);
});

const firstNums = [
  'один',
  'два',
  'три',
  'четыре',
  'пять',
  'шесть',
  'семь',
  'восемь',
  'девять',
];

const secondNums = [
  'одиннадцать',
  'двенадцать',
  'тринадцать',
  'четырнадцать',
  'пятьнадцать',
  'шестнадцать',
  'семнадцать',
  'восемнадцать',
  'девятнадцать',
];

const thirdNums = [
  'десять',
  'двадцать',
  'тридцать',
  'сорок',
  'пятьдесят',
  'шестьдесят',
  'семьдесят',
  'восемьдесят',
  'девяносто',
];

const fourthNums = [
  'сто',
  'двести',
  'триста',
  'четыреста',
  'пятьсот',
  'шестьсот',
  'семьсот',
  'восемьсот',
  'девятьсот',
];

isNaN(minValue) ? (minValue = NaN || -999) : minValue + 0;
isNaN(maxValue) ? (maxValue = NaN || 999) : minValue + 0;

minValue < -999 ? (minValue = -999) : minValue + 0;
maxValue > 999 ? (maxValue = 999) : maxValue + 0;

let arrMinNumber;
let arrMaxNumber;
let arrAnsNumber;

const numToNumArr = (num) => {
  let arrToNum = num
    .toString()
    .split('')
    .map((el) => {
      return parseInt(el);
    });
  return arrToNum;
};

const numToNagativeNumArr = (num) => {
  let arrToNum = num
    .toString()
    .split('')
    .map((el) => {
      if (el !== '-') {
        return parseInt(el);
      } else {
        return '-';
      }
    });
  return arrToNum;
};

let strAnsNumber;
let secondAnsStrNumber;
let thirdAnsSrtNumber;
let strAnsArr = [];
let ansNum1 = 0;
let ansNum2 = 0;
let ansNum3 = 0;
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 0;
let gameRun = true;

if (answerNumber > 0) {
  arrAnsNumber = numToNumArr(answerNumber);
} else if (answerNumber === 0) {
  arrAnsNumber = [0];
} else if (answerNumber < 0) {
  arrAnsNumber = numToNagativeNumArr(answerNumber);
}

let newStr;

const transformAnsArr = (arr) => {
  if (arr[0] !== '-') {
    if (arr[0] === 0) {
      return 0;
    } else if (arr.length === 1) {
      console.log(arr);
      ansNum1 = arr[0];
      newStr = `${firstNums[ansNum1 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `${firstNums[ansNum1 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 2 && arr[0] === 1 && arr[1] > 0) {
      console.log(arr);
      ansNum2 = arr[1];
      newStr = `${secondNums[ansNum2 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `${secondNums[ansNum2 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 2 && arr[0] > 0 && arr[1] === 0) {
      console.log(arr);
      ansNum1 = arr[0];
      newStr = `${thirdNums[ansNum1 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `${thirdNums[ansNum1 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 2 && arr[0] > 1 && arr[1] > 0) {
      console.log(arr);
      ansNum1 = arr[0];
      ansNum2 = arr[1];
      newStr = `${thirdNums[ansNum1 - 1]} ${firstNums[ansNum2 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `${thirdNums[ansNum1 - 1]} ${firstNums[ansNum2 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 3 && arr[1] > 1 && arr[2] > 0) {
      console.log(arr);
      ansNum1 = arr[0];
      ansNum2 = arr[1];
      ansNum3 = arr[2];
      newStr = `${fourthNums[ansNum1 - 1]} ${thirdNums[ansNum2 - 1]} ${
        firstNums[ansNum3 - 1]
      }`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `${fourthNums[ansNum1 - 1]} ${thirdNums[ansNum2 - 1]} ${
          firstNums[ansNum3 - 1]
        }`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 3 && arr[1] === 0 && arr[2] === 0) {
      console.log(arr);
      ansNum1 = arr[0];
      newStr = `${fourthNums[ansNum1 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `${fourthNums[ansNum1 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 3 && arr[1] === 0 && arr[2] > 0) {
      console.log(arr);
      ansNum1 = arr[0];
      ansNum3 = arr[2];
      newStr = `${fourthNums[ansNum1 - 1]} ${firstNums[ansNum3 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `${fourthNums[ansNum1 - 1]} ${firstNums[ansNum3 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 3 && arr[1] > 1 && arr[2] === 0) {
      console.log(arr);
      ansNum1 = arr[0];
      ansNum2 = arr[1];
      newStr = `${fourthNums[ansNum1 - 1]} ${thirdNums[ansNum2 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `${fourthNums[ansNum1 - 1]} ${thirdNums[ansNum2 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 3 && arr[1] === 1 && arr[2] > 0) {
      console.log(arr);
      ansNum1 = arr[0];
      ansNum3 = arr[2];
      newStr = `${fourthNums[ansNum1 - 1]} ${secondNums[ansNum3 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `${fourthNums[ansNum1 - 1]} ${secondNums[ansNum3 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 3 && arr[1] === 1 && arr[2] === 0) {
      console.log(arr);
      ansNum1 = arr[0];
      ansNum2 = arr[1];
      newStr = `${fourthNums[ansNum1 - 1]} ${thirdNums[ansNum2 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `${fourthNums[ansNum1 - 1]} ${thirdNums[ansNum2 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    }
  } else {
    if (arr.length === 2) {
      console.log(arr);
      ansNum1 = arr[1];
      newStr = `минус ${firstNums[ansNum1 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `минус ${firstNums[ansNum1 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 3 && arr[1] === 1 && arr[2] > 0) {
      console.log(arr);
      ansNum2 = arr[2];
      newStr = `минус ${secondNums[ansNum2 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `минус ${secondNums[ansNum2 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 2 && arr[1] > 0 && arr[2] === 0) {
      console.log(arr);
      ansNum1 = arr[1];
      newStr = `минус ${thirdNums[ansNum1 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `минус ${thirdNums[ansNum1 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 3 && arr[1] > 1 && arr[2] > 0) {
      console.log(arr);
      ansNum1 = arr[1];
      ansNum2 = arr[2];
      newStr = `минус ${thirdNums[ansNum1 - 1]} ${firstNums[ansNum2 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `минус ${thirdNums[ansNum1 - 1]} ${firstNums[ansNum2 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 4 && arr[2] > 1 && arr[3] > 0) {
      console.log(arr);
      ansNum1 = arr[1];
      ansNum2 = arr[2];
      ansNum3 = arr[3];
      newStr = `минус ${fourthNums[ansNum1 - 1]} ${thirdNums[ansNum2 - 1]} ${
        firstNums[ansNum3 - 1]
      }`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `минус ${fourthNums[ansNum1 - 1]} ${thirdNums[ansNum2 - 1]} ${
          firstNums[ansNum3 - 1]
        }`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 4 && arr[2] === 0 && arr[3] === 0) {
      console.log(arr);
      ansNum1 = arr[1];
      newStr = `минус ${fourthNums[ansNum1 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `минус ${fourthNums[ansNum1 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 4 && arr[2] === 0 && arr[3] > 0) {
      console.log(arr);
      ansNum1 = arr[1];
      ansNum3 = arr[3];
      newStr = `минус ${fourthNums[ansNum1 - 1]} ${firstNums[ansNum3 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `минус ${fourthNums[ansNum1 - 1]} ${firstNums[ansNum3 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 4 && arr[2] > 1 && arr[3] === 0) {
      console.log(arr);
      ansNum1 = arr[1];
      ansNum2 = arr[2];
      newStr = `минус ${fourthNums[ansNum1 - 1]} ${thirdNums[ansNum2 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `минус ${fourthNums[ansNum1 - 1]} ${thirdNums[ansNum2 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 4 && arr[2] === 1 && arr[3] > 0) {
      console.log(arr);
      ansNum1 = arr[1];
      ansNum3 = arr[3];
      newStr = `минус ${fourthNums[ansNum1 - 1]} ${secondNums[ansNum3 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `минус ${fourthNums[ansNum1 - 1]} ${secondNums[ansNum3 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    } else if (arr.length === 4 && arr[2] === 1 && arr[3] === 0) {
      console.log(arr);
      ansNum1 = arr[1];
      ansNum2 = arr[2];
      newStr = `минус ${fourthNums[ansNum1 - 1]} ${thirdNums[ansNum2 - 1]}`;
      console.log(`${newStr}: ${newStr.length}`);
      if (newStr.length < 20) {
        return `минус ${fourthNums[ansNum1 - 1]} ${thirdNums[ansNum2 - 1]}`;
      } else {
        return arr.toString().replaceAll(',', '');
      }
    }
  }
};

console.log(transformAnsArr(arrAnsNumber));

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Загадайте число`;

document.getElementById('btnRetry').addEventListener('click', function () {
  gameRun = true;
  isNaN(minValue) ? (minValue = NaN || -999) : minValue + 0;
  isNaN(maxValue) ? (maxValue = NaN || 999) : minValue + 0;

  minValue < -999 ? (minValue = -999) : minValue + 0;
  maxValue > 999 ? (maxValue = 999) : maxValue + 0;

  answerNumber = Math.floor((minValue + maxValue) / 2);
  if (answerNumber > 0) {
    arrAnsNumber = numToNumArr(answerNumber);
  } else if (answerNumber === 0) {
    arrAnsNumber = [0];
  } else if (answerNumber < 0) {
    arrAnsNumber = numToNagativeNumArr(answerNumber);
  }
  answerField.innerText = `Загадайте число, задайте промежуток и нажмите "Подтвердить"`;
  orderNumber = 0;
  orderNumberField.innerText = orderNumber;

  if (answerNumber > 0) {
    arrAnsNumber = numToNumArr(answerNumber);
  } else if (answerNumber === 0) {
    arrAnsNumber = [0];
  } else if (answerNumber < 0) {
    arrAnsNumber = numToNagativeNumArr(answerNumber);
  }
  minValue = 0;
  maxValue = 0;
  firstForm.value = '';
  secondForm.value = '';
});

document.getElementById('btnLess').addEventListener('click', function () {
  if (gameRun) {
    if (minValue >= maxValue) {
      const phraseRandom = Math.floor(Math.random() * 3);
      switch (phraseRandom) {
        case 1:
          answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
          break;
        case 2:
          answerField.innerText = `Такого не может быть\n\u{1F611}`;
          break;
        case 3:
          answerField.innerText = `Мне кажется, что вы меня обманули\n\u{1F620}`;
          break;
        default:
          answerField.innerText = `Вы загадали неправильное число!\n\u{1F610}`;
          break;
      }
      gameRun = false;
    } else {
      maxValue = answerNumber - 1;
      answerNumber = Math.ceil((minValue + maxValue) / 2);
      if (answerNumber > 0) {
        arrAnsNumber = numToNumArr(answerNumber);
      } else if (answerNumber === 0) {
        arrAnsNumber = [0];
      } else if (answerNumber < 0) {
        arrAnsNumber = numToNagativeNumArr(answerNumber);
      }
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const answerRandom = Math.round(Math.random() * 3);
      switch (answerRandom) {
        case 1:
          answerField.innerText = `Ваше число "${transformAnsArr(
            arrAnsNumber
          )}"?`;
          break;
        case 2:
          answerField.innerText = `Неужели "${transformAnsArr(arrAnsNumber)}"?`;
          break;
        case 3:
          answerField.innerText = `Возможно "${transformAnsArr(
            arrAnsNumber
          )}"?`;
          break;
        default:
          answerField.innerText = `А что, если "${transformAnsArr(
            arrAnsNumber
          )}"?`;
      }
    }
  }
});

document.getElementById('btnOver').addEventListener('click', function () {
  if (gameRun) {
    if (minValue >= maxValue) {
      const phraseRandom = Math.round(Math.random() * 3);
      switch (phraseRandom) {
        case 1:
          answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
          break;
        case 2:
          answerField.innerText = `Такого не может быть\n\u{1F611}`;
          break;
        case 3:
          answerField.innerText = `Мне кажется, что вы меня обманули\n\u{1F620}`;
          break;
        default:
          answerField.innerText = `Вы загадали неправильное число!\n\u{1F610}`;
          break;
      }
      gameRun = false;
    } else {
      minValue = answerNumber + 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      if (answerNumber > 0) {
        arrAnsNumber = numToNumArr(answerNumber);
      } else if (answerNumber === 0) {
        arrAnsNumber = [0];
      } else if (answerNumber < 0) {
        arrAnsNumber = numToNagativeNumArr(answerNumber);
      }
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const answerRandom = Math.round(Math.random() * 3);
      switch (answerRandom) {
        case 1:
          answerField.innerText = `Ваше число "${transformAnsArr(
            arrAnsNumber
          )}"?`;
          break;
        case 2:
          answerField.innerText = `Неужели "${transformAnsArr(arrAnsNumber)}"?`;
          break;
        case 3:
          answerField.innerText = `Возможно "${transformAnsArr(
            arrAnsNumber
          )}"?`;
          break;
        default:
          answerField.innerText = `А что, если "${transformAnsArr(
            arrAnsNumber
          )}"?`;
      }
    }
  }
});

document.getElementById('btnEqual').addEventListener('click', function () {
  if (gameRun) {
    const answerRandom = Math.round(Math.random() * 3);
    switch (answerRandom) {
      case 1:
        answerField.innerText = `Я всегда угадываю\n\u{1F935}`;
        break;
      case 2:
        answerField.innerText = `Это было просто\n\u{1F60E}`;
        break;
      case 3:
        answerField.innerText = `Отлично поиграли\n\u{1F91D}`;
        break;
      default:
        answerField.innerText = `Если хочешь поиграть снова, нажми кнопку "Заново"\n\u{1F3AE}`;
    }
    firstForm.value = 0;
    secondForm.value = 0;
    gameRun = false;
  }
});
