"use strict";

module.exports = [{
  name: 'title',
  message: '请输入项目名称'
}, {
  name: 'description',
  message: '请输入项目描述'
}, {
  name: 'author',
  message: '请输入项目作者',
  default: 'root'
}, {
  name: 'type',
  type: 'list',
  message: 'choose a type of project to init',
  choices: ['react', 'vue', 'h5'],
  default: 'react'
}];