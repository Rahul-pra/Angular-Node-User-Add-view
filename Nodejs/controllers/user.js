const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

/**
 * get users data with out login user data
 * @param {*} req 
 * @param {*} res 
 */
exports.getUsers = (req, res) => {
  User.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
  })
    .then(user => {
      res.status(200).send({
        status: true,
        data: user
      });
    })
    .catch(err => {
      res.status(500).send({ status: false, message: err.message });
    });
};


exports.saveUser = (req, res) => {
  console.log("req ==>", req.body)
  let birthDate = new Date(req.body.personalDetailFormData.dateOfBirth.year + '/' + req.body.personalDetailFormData.dateOfBirth.month + '/' + req.body.personalDetailFormData.dateOfBirth.day)
  console.log("date ==>", birthDate)
  let data = {
    name: req.body.personalDetailFormData.name,
    email: req.body.personalDetailFormData.email,
    password: req.body.personalDetailFormData.password,
    dateOfBirth: birthDate,
    contactNo: req.body.personalDetailFormData.contactNo,
    address: req.body.personalDetailFormData.address,
    businessName: req.body.businessDetailFormData.businessName,
    branches: JSON.stringify(req.body.businessDetailFormData.branches)
  }
  User.create(data)
    .then(task => {
      res.status(200).send({
        status: true,
        message: "user Added successfully!",
        data: task
      });
    })
    .catch(err => {
      res.status(500).send({ status: false, message: err.message });
    });
};


exports.updateUser = (req, res) => {
  console.log("req ==>", req.body)
  let birthDate = new Date(req.body.personalDetailFormData.dateOfBirth.year + '/' + req.body.personalDetailFormData.dateOfBirth.month + '/' + req.body.personalDetailFormData.dateOfBirth.day)
  console.log("date ==>", birthDate)
  let data = {
    name: req.body.personalDetailFormData.name,
    email: req.body.personalDetailFormData.email,
    password: req.body.personalDetailFormData.password,
    dateOfBirth: birthDate,
    contactNo: req.body.personalDetailFormData.contactNo,
    address: req.body.personalDetailFormData.address,
    businessName: req.body.businessDetailFormData.businessName,
    branches: JSON.stringify(req.body.businessDetailFormData.branches)
  }

  let query = {
    where: {
      id: req.body.id
    },
    returning: true,
  }

  User.update(data, query)
    .then(task => {
      res.status(200).send({
        status: true,
        message: "updated Data successfully!",
        data: task
      });
    })
    .catch(err => {
      res.status(500).send({ status: false, message: err.message });
    });
};

exports.deleteUser = (req, res) => {
  let query = {
    where: {
      id: req.body.id
    }
  }
  User.destroy(data)
    .then(task => {
      res.status(200).send({
        status: true,
        message: "user Added successfully!",
        data: task
      });
    })
    .catch(err => {
      res.status(500).send({ status: false, message: err.message });
    });
};

