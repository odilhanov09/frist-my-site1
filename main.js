alert('Bankomatga xush kelibsiz! Kartangizni kiriting');
var isCardHumo = confirm('Kartangiz "humo" mi? Is your card "humo"? Является ли ваша карта "humo"?')

if(isCardHumo==false){
    alert("bizda faqat humo kartalariga xizmat ko'rsatiladi");
} else if(isCardHumo==true){
    let language = prompt("Xizmat ko'rsatish tilini tanlang. Выберите язык обслуживание. Choose the language of service. English - 1. Русский - 2. O'zbek - 3.")
    if(language==1){
    let password = prompt("Enter your password");
        if( password<1000 || password>10000){
            alert("Please, enter valid number");
            let password = prompt("Enter your password");
            if( password<1000 || password>10000){
                alert("Please, enter valid number");
                let password = prompt("Enter your password");
                if( password<1000 || password>10000){
                    alert("Your card is blocked");
                }
            }
        } else{
            let service = prompt("Choose the service: 1-withdrow a cash. 2-set SMS service. 3-Check your balance. 4-Chenge the password number.")
            if(service == 1){
                let money = prompt("please enter the summ");

                if(money>50000){
                    alert("please take the cash: " + money);
                }else{
                    alert("there is no small cash");
                    let money = prompt("please enter the summ");
                }
            }
            else if(service == 2){
            let telephone = prompt("please enter your phone number")
            alert("your card connected to "+telephone);
            }
            else if(service == 3){
                let balance = alert("your card balance is 150000sum")
            }
            else if(service==4){
                let change = prompt("enter your new password");
                alert("Sizning parolingiz " + change + ' ga ozgartirildi');
            }

    
        }
    }

    else if(language==3){
        let password = prompt("Enter your password");
            if( password<1000 || password>10000){
                alert("Please, enter valid number");
                let password = prompt("Enter your password");
                if( password<1000 || password>10000){
                    alert("Please, enter valid number");
                    let password = prompt("Enter your password");
                    if( password<1000 || password>10000){
                        alert("Your card is blocked");
                    }
                }
            }
        else{
        let xizmatTuri = prompt("xizmat turini tanglang: 1-naqd pul yechish, 2-balans ko'rish, 3-sms habatnoma,4-parol ozgartirish");
        if(xizmatTuri==1){
            let sum =prompt("summani kiriting: ")
            alert("marhamat "+sum+" pulni oling")
        }
        if(xizmatTuri==2){
            alert(Math.random()*1000);
        }
        if(xizmatTuri==3){
            let sms = prompt("marhamat ulamoqchi bolgan raqamingizni kiriting!")
            alert("sizni kartangiz "  + sms +  " ga ulandi");
        }
        if(xizmatTuri==4){
            let yangiParol = prompt("Yangi porolni kiriting")
            let edit = confirm("Kartangizni Paroli ozgatirilsimi");
            if(edit==true){
                alert("parol ozgartirildi")
            }
            if(edit==false){
                alert("boshqa parol qoying")
            }
            } 
        }
        }
    }


