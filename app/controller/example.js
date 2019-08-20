'use strict';

const Controller = require('egg').Controller;
const Mock = require('mockjs')

class exampleController extends Controller {
  async index() {
    this.ctx.response.type = 'json'
    this.ctx.body = Mock.mock({
      'title|20-50': '哈'
    })
  }
}

module.exports = exampleController;