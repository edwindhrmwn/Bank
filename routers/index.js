const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')

router.get('/', (req, res) => {
    res.send('halooo')
})

router.get('/customers', controller.getList)

router.get('/customers/register', controller.register)
router.post('/customers/register', controller.registerPost)

router.get('/customers/:idCustomer/editProfile', controller.editProfile)
router.post('/customers/:idCustomer/editProfile', controller.editProfilePost)

router.get('/customers/:idCustomer/accounts', controller.listAccounts)
router.post('/customers/:idCustomer/accounts', controller.listAccountsPost)

router.get('/customers/:idCustomer/accounts/:idAccount/transfer', (req, res) => {

})
router.post('/customers/:idCustomer/accounts/:idAccount/transfer', (req, res) => {

})

module.exports = router