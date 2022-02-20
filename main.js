 const quote= ['The purpose of our lives is to be happy.',
'Life is what happens when you’re busy making other plans.',
'Get busy living or get busy dying.',
'You only live once, but if you do it right, once is enough.',
'Many of lifes failures are people who did not realize how close they were to success when they gave up.'
];


var randomNumber = Math.floor(Math.random()*(quote.length));

document.getElementById('quote-display').innerHTML = quote[randomNumber];


document.getElementById('red-button').addEventListener('click', function(){
    const quote = document.getElementById('quote-display');
    
    quote.style.backgroundColor = 'red'
    quote.style.color ='white'
    quote.style.borderColor='green'
});

document.getElementById('blue-button').addEventListener('click', function(){
    const quote = document.getElementById('quote-display');
    
    quote.style.backgroundColor = 'skyblue'
    quote.style.color ='white'
    quote.style.borderColor='red'
});

document.getElementById('green-button').addEventListener('click', function(){
    const quote = document.getElementById('quote-display');
    
    quote.style.backgroundColor = 'green'
    quote.style.color ='white'
    quote.style.borderColor='skyblue'
});

document.getElementById('yellow-button').addEventListener('click', function(){
    const quote = document.getElementById('quote-display');
    
    quote.style.backgroundColor = 'yellow'
    quote.style.color ='black'
    quote.style.borderColor='green'
});


var num = document.getElementsByTagName('textarea')[0]
document.getElementById('clr').onclick = function () {
num.value = ''
}
var capitalize = true;
document.getElementById('capita').onclick = function () {
if (capitalize) num.value = num.value.toUpperCase()
else num.value = num.value.toLowerCase()
capitalize = !capitalize;
}
document.getElementById('sB').onclick = function () {
var line = num.value.split('\n')
for (var i = 0; i < line.length; i++)
line[i] = line[i].trim();
line = line.join('\n')
num.value = line
}
document.getElementById('srt').onclick = function () {
var line = num.value.split('\n')
num.value = line.sort().join('\n')
}
document.getElementById('rev').onclick = function () {
var line = num.value.split('\n')
for (var i = 0; i < line.length; i++) {
var prev = line[i];
line[i] = '';
for (var j = 0; j < prev.length; j++)
line[i] = prev[j] + line[i];
}
line= line.join('\n')
num.value = line
}
document.getElementById('anumb').onclick = function () {
var line = num.value.split('\n')
for (var i = 0; i < line.length; i++)
line[i] = i + 1 + '. ' + line[i];
line = line.join('\n')
num.value = line
}
document.getElementById('shuf').onclick = function () {
var line = num.value.split('\n')
}





