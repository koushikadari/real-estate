const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint returning sample real estate listings
app.get('/api/listings', (req, res) => {
  const listings = [
    {
      id: 1,
      title: 'Modern 2-bedroom Apartment',
      price: '$1200 / month',
      location: 'Downtown',
      image: 'https://via.placeholder.com/200x120?text=Apartment+1'
    },
    {
      id: 2,
      title: 'Cozy Cottage',
      price: '$850 / month',
      location: 'Suburbs',
      image: 'https://via.placeholder.com/200x120?text=Cottage+2'
    },
    {
      id: 3,
      title: 'Luxury Villa',
      price: '$3500 / month',
      location: 'Uptown',
      image: 'https://via.placeholder.com/200x120?text=Villa+3'
    }
  ];
  res.json(listings);
});

app.listen(port, () => {
  console.log(`Real estate app listening on port ${port}`);
});