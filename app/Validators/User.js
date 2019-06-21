'use strict'

const Antl = use('Antl')

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed',
      'addresses.*.street': 'required_if:addresses'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = User
