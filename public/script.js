document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.getElementById("menu");
    const itemDetails = document.getElementById("item-details");
    const itemTitle = document.getElementById("item-title");
    const itemImage = document.getElementById("item-image");
    const itemDescription = document.getElementById("item-description");
    const orderForm = document.getElementById("food-order-form");
    const validationMessage = document.getElementById("validation-message");
    const itemSelect = document.getElementById("item-select");
    const quantityInput = document.getElementById("quantity-input");
    const cartTotal = document.getElementById("cart-total");
    const submissionMessage = document.getElementById("submission-message");

    let menuData = [
        { name: "Char-Broiled Hot Dog: $1.50", image: "images/hotdog.jpg", description: "Char-Broiled Hot Dog!", price: 1.5 },
        { name: "Woodfire Oven Pizza: $1.99", image: "images/pizza.jpg", description: "Woodfire oven pizza!", price: 1.99 },
        { name: "Chicken Bake: $3.99", image: "images/chickenbake.jpg", description: "Chicken and bacon filled pastry!", price: 3.99},
        { name: "Big Mac Burger: $4.29", image: "images/bigmac.jpg", description: "100% Beef Big Mac Burger!", price: 4.29},
        { name: "Golden Fries: $3.19", image: "images/fries.jpg", description: "The famous Golden Fries!", price: 3.19},
        { name: "Chicken Nuggets: $4.29", image: "images/nuggets.jpg", description: "Crunchy Nuggets!", price: 4.29},
        { name: "Panda Rice: $4.00", image: "images/rice.jpg", description: "Rice, the staple of Panda", price: 4.00},
        { name: "Panda Noodles: $4.00", image: "images/noodles.jpg", description: "Matt's personal favorite food item", price:4.00},
        { name: "Grilled Chicken Teriyaki: $5.00", image: "images/chicken.jpg", description: "The savory grilled chicken teriyaki!", price: 5.00},
        { name: "Nandoca's Choice: $13.30", image: "images/nandoca.jpg", description: "Nandoca's choice, a crowd favorite!", price: 13.30},
        { name: "Chicken Bowl: $13.19", image: "images/chickenbowl.jpg", description: "A healthy option with good protein!", price: 13.19},
        { name: "Nando's Seasoned Fries: $4.89", image: "images/fries2.jpg", description: "Nando's fries seasoned to perfection!", price: 4.89}
    ];


    function displayMenu() {
        menuContainer.innerHTML = "";
        menuData.forEach((item, index) => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.textContent = item.name;
            menuItem.addEventListener("click", () => showItemDetails(index));
            menuContainer.appendChild(menuItem);
            const option = document.createElement("option");
            option.value = index;
            option.textContent = item.name;
            itemSelect.appendChild(option);
        });
    }

    function showItemDetails(index) {
        const selectedItem = menuData[index];
        itemTitle.textContent = selectedItem.name;
        itemImage.src = selectedItem.image;
        itemDetails.style.display = "block";
        itemSelect.value = index;
    }
    

    function validateForm() {
        const quantity = parseInt(quantityInput.value);
        if (isNaN(quantity) || quantity < 1 || quantity > 10) {
            validationMessage.textContent = "Please enter a valid quantity between 1 and 10.";
            return false;
        }
        validationMessage.textContent = "";
        return true;
    }

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            const selectedItemIndex = itemSelect.value;
            const quantity = parseInt(quantityInput.value);
            const selectedItem = menuData[selectedItemIndex];
            alert(`You have ordered ${quantity} ${selectedItem.name}, Subtotal: $ ${quantity * selectedItem.price}`);
        }
    });

    itemSelect.addEventListener("change", function () {
        const selectedIndex = itemSelect.value;
        showItemDetails(selectedIndex);
    });

    displayMenu();
});