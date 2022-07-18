// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { usePottery, toSellOrNotToSell } from './PotteryCatalog.js'


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 3)
let bowl = makePottery("bowl", 4, 4)
let vase = makePottery("vase", 5, 7)
let plate = makePottery("plate", 4, 2)
let platter = makePottery("platter", 6, 2)

console.log(mug, bowl, vase, plate, platter)


// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 1900)
const firedBowl = firePottery(bowl, 2200)
const firedVase = firePottery(vase, 2300)
const firedPlate = firePottery(plate, 2000)
const firedPlatter = firePottery(platter, 2400)

console.log(firedMug, firedBowl, firedVase, firedPlate, firedPlatter)

// Determine which ones should be sold, and their price

const mugCheck = toSellOrNotToSell(mug)
const bowlCheck = toSellOrNotToSell(bowl)
const vaseCheck = toSellOrNotToSell(vase)
const plateCheck = toSellOrNotToSell(plate)
const platterCheck = toSellOrNotToSell(platter)



// Invoke the component function that renders the HTML list



