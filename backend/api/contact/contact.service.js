
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('contact')
    try {
        var contacts = await collection.find(criteria).toArray();
        return contacts
    } catch (err) {
        console.log('ERROR: cannot find contacts')
        throw err;
    }
}

async function getById(contactId) {
    const collection = await dbService.getCollection('contact')
    try {
        const contact = await collection.findOne({ "_id": ObjectId(contactId) })
        return contact
    }
    catch (err) {
        console.log(`ERROR: while finding contact ${contactId}`)
        throw err;
    }
}


async function remove(contactId) {
    const collection = await dbService.getCollection('contact')
    try {
        await collection.deleteOne({ "_id": ObjectId(contactId) })
    } catch (err) {
        console.log(`ERROR: cannot remove contact ${contactId}`)
        throw err;
    }
}

async function update(contact) {
    const collection = await dbService.getCollection('contact')
    contact._id = ObjectId(contact._id);
    contact.updatedAt = Date.now();
    try {
        await collection.replaceOne({ "_id": contact._id }, contact )
        return contact
    } catch (err) {
        console.log(`ERROR: cannot update contact ${contact._id}`)
        throw err;
    }
}

async function add(contact) {
    const collection = await dbService.getCollection('contact')
    try {
        await collection.insertOne(contact);
        return contact;
    } catch (err) {
        console.log(`ERROR: cannot insert contact`)
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.name) {
        criteria.name = { $regex: new RegExp(filterBy.name, 'ig') }
    }
  
    return criteria;
}

