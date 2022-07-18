let primaryKey = 1
export const makePottery = (shape, weight, height) => {
    const potteryObj = {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey
    }
    primaryKey ++
    return potteryObj
}

// module.exports = {makePottery}
