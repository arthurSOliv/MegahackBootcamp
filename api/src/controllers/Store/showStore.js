const connection = require('../../database/connection');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

module.exports = {
    async showStore(request,response){    
        const stores = await connection('store').select("*").then(rows => rows);

        return response.json(stores);
    }
}