let potteryList = []
export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.weight >= 6) {
        potteryObj.price = 40
    } else {
        potteryObj.price = 20
    }
    if (potteryObj.cracked === false) {
        potteryList.push(potteryObj)
    }
}

export const usePottery = (potteryList) => {
    const potteryListClone = [...potteryList]
    return potteryListClone
}