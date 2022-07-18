export const firePottery = (potteryObj, kilnTemp) => {
    potteryObj.fired = true
    if (kilnTemp > 2200) {
        potteryObj.cracked = true
    } else {
        potteryObj.cracked = false
    }
    return potteryObj
}