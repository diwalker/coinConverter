const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

var green, greenLight, reset
green = '\033[0;32m'
greenLight = '\033[1;32m';
reset = '\u001b[0m';
yellow = '\033[1;33m';

console.log(green +`
 ██████  ██████  ██ ███    ██      ██████  ██████  ███    ██ ██    ██ ███████ ██████  ████████ ███████ ██████  
██      ██    ██ ██ ████   ██     ██      ██    ██ ████   ██ ██    ██ ██      ██   ██    ██    ██      ██   ██ 
██      ██    ██ ██ ██ ██  ██     ██      ██    ██ ██ ██  ██ ██    ██ █████   ██████     ██    █████   ██████  
██      ██    ██ ██ ██  ██ ██     ██      ██    ██ ██  ██ ██  ██  ██  ██      ██   ██    ██    ██      ██   ██ 
 ██████  ██████  ██ ██   ████      ██████  ██████  ██   ████   ████   ███████ ██   ██    ██    ███████ ██   ██` + reset + 
greenLight + `                                                                                                                       Developed by: @diwalker                                                                                                 
` + reset);

console.log(yellow + 'Bem vindo ao Bot conversor de moedas! 🤖💸💸' + reset);


async function robo() {
    const browser = await puppeteer.launch( { headless: true } );
    const page = await browser.newPage();
    const moedaBase = readlineSync.question('Informe a moeda base: ') ||  'dolar';
    const moedaFinal = readlineSync.question('Informe a moeda desejada: ') ||  'real';
    const qualquerUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome.0.69i59j0i131i433i512j0i512l8.2968j1j9&sourceid=chrome&ie=UTF-8`;
    await page.goto(qualquerUrl);

    const resultado = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });
    
    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é: ${resultado}`)
    await browser.close();
    }
robo();

