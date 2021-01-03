const { Customer, Account } = require('../models/index')
const helper = require('../helper/index')

class controller {
    static getList (req, res) {
        // res.send('halo dari contorlalajaeff')
        Customer.findAll({
            order: [['fullName', 'asc']]
        })
        .then(data => {
            res.render('customersList', { data })
        })
        .catch(err => {
            res.send(err)
        })
    }
    static register (req, res) {
        res.render('register')
    }
    static registerPost (req, res) {
        // res.send('sukses')
        let data = {
            identityNumber: req.body.identityNumber,
            fullName: req.body.fullName,
            address: req.body.address,
            birthDate: req.body.birthDate,
            gender: req.body.gender
        }
        Customer.create(data)
        .then (data => {
            res.redirect('/customers')
        })
        .catch (err => {
            res.send(err)
        })
    }
    static editProfile (req, res) {
        let id = req.params.idCustomer
        Customer.findByPk(id)
        .then(data => {
            res.render('editProfile', { data })
        })
        .catch(err => {
            res.send(err)
        })
    }
    static editProfilePost (req, res) {
        let id = req.params.idCustomer
        let edited = {
            identityNumber: req.body.identityNumber,
            fullName: req.body.fullName,
            address: req.body.address,
            birthDate: req.body.birthDate,
            gender: req.body.gender
        }
        Customer.update(edited, {
            where: {
                id:id
            }
        })
        .then(data => {
            res.redirect('/customers')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static listAccounts (req, res) {
        // res.send('suskses')
        let id = +req.params.idCustomer
        Account.findAll({
            where: {
                'CustomerId': id
            }, //include: [Customer]
        })
        .then(data => {
            // res.send(data)
            res.render('accountsList', { idCustomer: id, data:data })
        })
        .catch(err => {
            res.send(err)
        })
    }
    static listAccountsPost (req, res) {
        let id = req.params.idCustomer
        
        let data = {
            type: req.body.type,
            balance: req.body.balance,
            CustomerId: id
        }
        Account.create(data)
        .then(data => {
            res.redirect(`/customers/${id}/accounts`)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = controller