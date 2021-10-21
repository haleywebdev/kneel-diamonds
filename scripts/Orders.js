import { getOrders } from "./database.js"
import { getMetals } from "./database.js"
import { getSizes } from "./database.js"
import { getStyles } from "./database.js"
import { setMetal } from "./database.js"
import { setSize } from "./database.js"
import { setStyle } from "./database.js"
import { addCustomOrder } from "./database.js"



const buildOrderListItem = (order) => {
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()

    const foundMetal = metals.find(
        (metal) => {
            (metal.id === order.metalId)
        }
    )
    const foundSize = sizes.find(
        (size) => {
            (size.id === order.sizeId)
        }
    )
    const foundStyle = styles.find(
        (style) => {
            (style.id === order.styleId)
        }
    )

    const totalCost = foundMetal.price + foundSize.price + foundStyle.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

        `<li>
        Order #${order.id} cost ${costString}
    </li>`

}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

