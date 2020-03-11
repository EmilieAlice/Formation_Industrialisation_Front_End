import config from './config.json5';

function hello(name) {
  return `${config.message} ${name} !!!`;
}

export { hello };
