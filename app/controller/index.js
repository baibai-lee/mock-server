'use strict';

const Controller = require('egg').Controller;

class indexController extends Controller {
  async index() {
    this.ctx.body = `
        <style>
            h1 {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                padding-bottom: 300px;
            } 
        </style>
        
        <h1>This Is Mock Server Based On EGG</h1>
    `;
  }
}

module.exports = indexController;
