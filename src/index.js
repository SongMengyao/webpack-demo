import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'

function component() {
  var element = document.createElement('div')

  // Lodash，现在由此脚本导入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  // 将图像添加到我们现有的 div。
  var myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)

  console.log('Data: ', Data)

  return element
}

document.body.appendChild(component())
