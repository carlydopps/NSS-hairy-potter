
let potteryList = []

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.cracked === false) {
        if (potteryObj.weight >= 6) {
            potteryObj.price = 40
        } else {
            potteryObj.price = 20
        }
        potteryList.push(potteryObj)
    }
    return potteryObj
}

export const usePottery = () => {
    const potteryListClone = [...potteryList]
    return potteryListClone
}