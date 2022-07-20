// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 2)
let bowl = makePottery("Bowl", 4, 6)
let vase = makePottery("Vase", 5, 7)
let plate = makePottery("Plate", 4, 6)
let platter = makePottery("Platter", 6, 2)

console.log(mug, bowl, vase, plate, platter)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 1900)
let firedBowl = firePottery(bowl, 2200)
let firedVase = firePottery(vase, 2300)
let firedPlate = firePottery(plate, 2000)
let firedPlatter = firePottery(platter, 2400)

console.log(firedMug, firedBowl, firedVase, firedPlate, firedPlatter)

// Determine which ones should be sold, and their price

const mugCheck = toSellOrNotToSell(firedMug)
const bowlCheck = toSellOrNotToSell(firedBowl)
const vaseCheck = toSellOrNotToSell(firedVase)
const plateCheck = toSellOrNotToSell(firedPlate)
const platterCheck = toSellOrNotToSell(firedPlatter)

const potteryList = usePottery()
console.log(potteryList)

// Invoke the component function that renders the HTML list

const HTMLformat = PotteryList()
const parentHTMLElement = document.querySelector(".potteryList")
parentHTMLElement.innerHTML = HTMLformat // Could call function directly here or the variable that you saved the return result in


