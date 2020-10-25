const express = require('express')
const {getContact, getContacts, deleteContact, updateContact,addContact} = require('./contact.controller');
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getContacts)
router.get('/:id', getContact)
router.put('/:id',updateContact)
router.delete('/:id',deleteContact)
router.post('/', addContact)

module.exports = router