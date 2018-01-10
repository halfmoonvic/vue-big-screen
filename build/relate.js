/*!
 * 相对化脚本，用于将React、Vue等项目默认生成的绝对地址转换为相对地址。
 * @author Molay
 */

var CommonLib = require('./common-library-node.min.js');
CommonLib.relativism({
  path: __dirname + '/../dist/**',
  removeSourceMap: true
});
