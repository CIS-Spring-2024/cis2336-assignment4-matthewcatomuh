const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

let cartItems = [];
let cartTotal = 0;

app.post('/submit-order', (req, res) => {
    const { itemName, quantity, price } = req.body;

    if (!itemName || !quantity || !price || quantity <= 0 || price <= 0) {
        return res.status(400).send('Invalid form data');
    }

    const subtotal = quantity * price;

    cartItems.push({ itemName, quantity, price, subtotal });
    cartTotal += subtotal;

    res.json({ cartItems, cartTotal });
});

app.get('/cart', (req, res) => {
    res.json({ cartItems, cartTotal });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
