'use strict';

const Controller = require('egg').Controller;
const Mock = require('mockjs')

class imagesController extends Controller {
    //   async index() {
    //     this.ctx.response.type = 'json'
    //     this.ctx.body = Mock.mock({
    //       'title|20-50': '哈'
    //     })
    //   }
    async normal() {
        this.ctx.response.type = 'json'
        this.ctx.body = Mock.mock("@image('1226x500')")
    }
}

module.exports = imagesController;