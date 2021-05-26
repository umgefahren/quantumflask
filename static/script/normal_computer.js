function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function UpdateThink1() {
    await sleep(2000);
    document.getElementById("thinking1").innerHTML = "Done";
}

UpdateThink1();

async function UpdateThink2() {
    await sleep(2000);
    document.getElementById("thinking2").innerHTML = "Done";
}

class Coin {
    constructor() {
        this.value = 1;
    }
    flip() {
        if (this.value == 1) {
            this.value = 0
        } else {
            this.value = 1
        }
    }
}

async function EvaluateChoiceNormal() {
    console.log("Hello World");

    var a1 = getRandomInt(2)
    const flip_result = document.getElementById("Flip").checked;
    const dontflip_result = document.getElementById("DontFlip").checked;
    console.log(a1);
    console.log(flip_result);
    console.log(dontflip_result);
    if (flip_result == dontflip_result && flip_result == false) {
        console.log("Forgot to enter value");
    } else {
        document.getElementById("thinking2").innerHTML = "Thinking...";
        await sleep(2000);
        document.getElementById("thinking2").innerHTML = "Done";
        const b1 = flip_result.valueOf();
        var a2 = getRandomInt(2);
        var coin = new Coin();
        if (a1 == 1) {
            coin.flip()
        }
        if (b1 == true) {
            coin.flip()
        }
        if (a2 == 1) {
            coin.flip()
        }
        if (coin.value == 1) {
            document.getElementById("ResultCoin").innerHTML = "Head";
            document.getElementById("Winner").innerHTML = "Alice";
        } else {
            document.getElementById("ResultCoin").innerHTML = "Tails";
            document.getElementById("Winner").innerHTML = "Bob";
        }
    }
}