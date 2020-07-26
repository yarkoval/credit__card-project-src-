// let cardNumberValue = document.getElementById('cardNumber').value;
document.getElementById('cardNumber').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});

document.getElementById('cvv').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});

document.getElementById('expYear').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});

// let input = document.getElementById('cardNumber');
// input.onblur = function() {
//     alert(cardNumberValue);
//     if (!Moon(cardNumberValue)) {
//         input.classList.add('invalid');
//         error.innerHTML = 'please type valid card number'
//     }
// };

// input.onfocus = function() {
//     if (this.classList.contains('invalid')) {

//         this.classList.remove('invalid');
//         error.innerHTML = "";
//     }
// };

// function Moon(card_number) {

//     var arr = [],
//         card_number = card_number.toString();
//     for (var i = 0; i < card_number.length; i++) {
//         if (i % 2 === 0) {
//             var m = parseInt(card_number[i]) * 2;
//             if (m > 9) {
//                 arr.push(m - 9);
//             } else {
//                 arr.push(m);
//             }
//         } else {
//             var n = parseInt(card_number[i]);
//             arr.push(n)
//         }
//     }
//     //console.log(arr);
//     // var summ = arr.reduce(function(a, b) { return a + b; });
// // return Boolean(!(summ % 10));

// }