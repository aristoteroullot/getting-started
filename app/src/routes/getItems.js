const db = require('../persistence');

module.exports = async (req, res) => {
    const items = await db.getItems();
    // Add apiVersion to each item
    const itemsWithVersion = items.map(item => ({
        ...item,
        apiVersion: "1.0"
    }));
    res.send(itemsWithVersion);
};
