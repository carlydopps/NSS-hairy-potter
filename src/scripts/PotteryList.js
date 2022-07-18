import { usePottery } from "./PotteryCatalog.js"

// Define and export a function
    // Define a variable to store the HTML format of the entire pottery list
    // For each pottery obj in the list
        // To the HTML variable,
        // Add a section tag with class ="pottery" and id="pottery--object's id"
        // On a new line tabbed over, add an h2 tag for the object's name with class="pottery__shape"
        // On a new line tabbed over, add a div tag with class="pottery__properties"
        // On a new line tabbed over x2, add a statement of 'Item weighs __ grams and is __ cm in height'
        // On a new line tabbed over, add the closing div tag
        // On a new line tabbed over, add another div tag with class="pottery__price"
        // On a new line tabbed over x2, add a statment of 'Price is __'
        // On a new line tabbed over, add the closing div tag
        // Add the closing section tag

export const PotteryList = () => {
    const potteryList = usePottery()
    let HTMLformat = ""
    for (const i of potteryList) {
        HTMLformat += `<section class="pottery" id="pottery--${i.id}">
        \n\t<h2 class="pottery__shape">${i.shape}</h2>
        \n\t<div class="pottery__properties">
        \n\t\tItem weighs ${i.weight} grams and is ${i.height} cm in height
        \n\t</div>
        \n\t<div class="pottery__price">
        \n\t\tPrice is $${i.price}
        \n\t</div>
        \n</section>`
    }
    return HTMLformat
}