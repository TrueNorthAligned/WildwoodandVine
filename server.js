const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Load product data
const productsPath = path.join(__dirname, 'data', 'products.json');
let products = [];
if (fs.existsSync(productsPath)) {
    products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
}

// Load affirmations
const affirmationsPath = path.join(__dirname, '..', 'planner-products', 'assets', 'affirmations.txt');
let affirmations = [];
if (fs.existsSync(affirmationsPath)) {
    affirmations = fs.readFileSync(affirmationsPath, 'utf8').split('\n').filter(line => line.trim() !== '');
}

// Routes
app.get('/', (req, res) => {
    const randomAffirmation = affirmations.length > 0 ? affirmations[Math.floor(Math.random() * affirmations.length)] : "Bloom where you are planted.";
    res.render('index', { 
        title: 'Fern & Flourish Co. | Nature-Inspired Planners', 
        products: products.slice(0, 3),
        affirmation: randomAffirmation
    });
});

app.get('/shop', (req, res) => {
    res.render('shop', { title: 'Shop | Fern & Flourish Co.', products });
});

app.get('/product/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) {
        return res.status(404).send('Product not found');
    }
    res.render('product', { title: `${product.name} | Fern & Flourish Co.`, product });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us | Fern & Flourish Co.' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact | Fern & Flourish Co.' });
});

// Mock Success Page after purchase
app.get('/success', (req, res) => {
    const productId = req.query.product_id;
    const product = products.find(p => p.id === productId);
    res.render('success', { title: 'Thank You! | Fern & Flourish Co.', product });
});

// Digital Download Route
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'downloads', filename);
    
    if (fs.existsSync(filePath)) {
        res.download(filePath);
    } else {
        res.status(404).send('File not found');
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
