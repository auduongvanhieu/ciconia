const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995a'),
    name: 'Âu Dương Văn Hiếu',
    email: 'auduongvanhieu@gmail.com',
    password: '$2a$05$2KOSBnbb0r.0TmMrvefbluTOB735rF/KRZb4pmda4PdvU9iDvUB26',
    role: 'admin',
    verified: true,
    verification: '3d6e072c-0eaf-4239-bb5e-495e6486148f',
    city: 'HCM',
    country: 'Viet Nam',
    phone: '0392284283',
    gender: false,
    birthday: '05/01/1996',
    avatar: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhbXaYAEtIkRRBEREL0jwQUEERsDeHTjH_5vD7Ssm6JsfMLhg8Q`,
    address: '140 Lê Trọng Tấn',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
