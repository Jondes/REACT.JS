const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Johnson', lastName: 'Guedes' },
        { id: 3, firstName: 'Jack', lastName: 'Swansea' }
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));