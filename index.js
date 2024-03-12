let money = 0
let moneyEl = document.getElementById("cash")
let total_money = 0
let totalEl = document.getElementById("total")
let textEl = document.getElementById("good_job")
let textHire = document.getElementById("hiring")
let checker1 = 0
let checker2 = 0
let workers = 0
let counter = 1
let rng_worker = 0
let rngText = document.getElementById("rng_worker")
let luckyText = document.getElementById("lucky")
let robText = document.getElementById("rob")
let checker3 = 0
let reward = document.getElementById("codes")
let claimed = 0
let helper = document.getElementById("help")
let helped = 0
let investment = document.getElementById("invest")
let checker4 = 0
let finale = document.getElementById("congrats")

function codes() {
    code = prompt("Enter code")
    if (code === "Beta Tester" && claimed === 0) {
        reward.textContent = "Thanks for playing! Much appreciated!"
        total_money += 1000
        totalEl.textContent = total_money
        claimed = 1
    } else if (code !== "Beta Tester") {
        reward.textContent = "Invalid Code!"
    } else if (claimed === 1) {
        reward.textContent = "You already claimed this!"
    }
}

function invest() {
    if (total_money < 500 && checker4 === 1) {
        investment.textContent = "You don't have enough money!"
    } else if (total_money < 500 && checker4 === 0) {
        investment.textContent = "Reach 500 JS dollars first to unlock this phrase"
    } else {
        invest_money = 200
        luck = Math.round(Math.random(0,1)*5)
        if (luck === 1) {
            total_money = total_money + (invest_money * 2)
            totalEl.textContent = total_money
            investment.textContent = "Congrats! The business you invested on succeeded and gave you back double the amount of money you invested!"
        } else if (luck === 0 || luck === 5) {
            totalEl.textContent = total_money
            investment.textContent = "The business you invested had no profit or losses!"
        } else {
            total_money -= invest_money
            totalEl.textContent = total_money
            investment.textContent = "The business you invested did not succeed! You lost money!"
        }
    }
}

function help() {
    helper.textContent = "Earn : Earn +1 JS dollar. Hire: Hire a worker who has a small chance in giving you +10 JS dollars when the EARN button is activated. Rob : Rob a bank to have a small chance of receiving +1000 JS dollars, or risk all your money. Lottery : Costs 1000 JS dollars for participation, but stand a very slim chance of winning big bucks. Invest : Invest 200 JS dolars in businesses to either lose/earn money. Codes: Enter a code to receive rewards!"
    helped = 1
}

function hire() {
     if (total_money < 100 && checker1 === 0) {
        textHire.textContent = "Reach 100 JS dollars first to unlock this phrase!"
    } else if (total_money < 100) {
        textHire.textContent = "You don't have enough money!"
    } else {
        let hired = 100
        total_money -= hired
        moneyEl.textContent = money
        totalEl.textContent = total_money
        money = 0
        workers += 1
        return(workers)
    }
}

function lottery() {
    if (total_money < 1000 && checker2 === 0) {
        luckyText.textContent = "Reach 1000 JS dollars first to unlock this phrase!"
    } else if (total_money < 1000) {
        luckyText.textContent = "You don't have enough money!"
    } else {
        let ticket = 1000
        total_money -= ticket
        moneyEl.textContent = money
        totalEl.textContent = total_money
        money = 0
        luck = Math.round(Math.random(0,1)*99)
        if (luck === 50) {
            luckyText.textContent = `Congrats! You won the lottery! Prize : 10000 JS dollars!`
            total_money += 10000
            totalEl.textContent = total_money
        } else {
            luckyText.textContent = "Unlucky!"
            }
    }
}

function robbery() {
    if (total_money < 2000 && checker3 === 0) {
        robText.textContent = "Reach 2000 JS dollars first to unlock this phrase!"
    } else {
        money = 0
        moneyEl.textContent = money
        luck = Math.round(Math.random(0,1)*9)
        if (luck === 0) {
            robText.textContent = "Congrats! You managed to steal 1000 JS dollars from the bank!"
            total_money += 1000
            totalEl.textContent = total_money
            checker2 = 1
        } else if (luck === 3 || luck === 7) {
            robText.textContent = "You tried stealing money from the bank...but failed!"
        } else {
            robText.textContent = "Oops! You let your guard down and got caught by the police! You lose all your money!"
            total_money -= total_money
            totalEl.textContent = total_money
        }
    }
}

function earn() {
    let done1 = 1
    let done2 = 1
    if (workers != 0) {
        for (i = workers; i > 0; i--) {
            luck = Math.round(Math.random(0,1)*19)
            if (luck === 10 || luck === 1) {
                rng_worker += 1
                total_money += 10
                totalEl.textContent = total_money
            } else {
                textHire.textContent = ""
            }
        }
        rngText.textContent = `Your ${rng_worker} hired worker manage to earn you 10 JS dollars each!`
    }
    money += 1
    total_money += money
    moneyEl.textContent = money
    totalEl.textContent = total_money
    money = 0
    if (total_money >= counter * 100) {
        textEl.textContent = `Nice job! That's ${counter * 100} JS bucks!`
        counter += 1
        if (total_money >= 100000) {
            finale.textContent = "CONGRATS! YOU ACHIEVED 100K JS DOLLARS!!! 🤑💸 THANKS FOR PLAYING!"
        }
    }
    if (total_money >= 100 && checker1 === 0) {
        textHire.textContent = "Now you can use the HIRE button!"
        checker1 = 1
    } else {
        textHire.textContent = ""
    }
    if (total_money >= 1000 && checker2 === 0) {
        luckyText.textContent = "Now you can use the LOTTERY button!"
        checker2 = 1
    } else {
        luckyText.textContent = ""
    }
    if (total_money >= 2000 && checker3 === 0) {
        robText.textContent = "Now you can use the ROB button!"
        checker3 = 1
    } else {
        robText.textContent = ""
    }
    if (total_money >= 500 && checker4 === 0) {
        investment.textContent = "Now you can use the INVEST button!"
        checker4 = 1
    } else {
        investment.textContent = ""
    }
    if (rng_worker === 0) {
        rngText.textContent = ""
    }
    if (claimed === 0 || claimed === 1) {
        reward.textContent = ""
    }
    if (helped === 1) {
        helper.textContent = ""
    }
    rng_worker = 0
}
/*Emotes: 💰 💲*/

/* add ons: invest, code, help*/