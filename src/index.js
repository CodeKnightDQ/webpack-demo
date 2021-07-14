/*
 * @Author: daiqi@sogou-inc.com
 * @Date: 2021-07-09 17:15:37
 * @Description: 
 */
import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    const btn = document.createElement('button');
    btn.innerHTML = 'click me!';
    element.appendChild(btn);
    
    return element;
}

document.body.appendChild(component());