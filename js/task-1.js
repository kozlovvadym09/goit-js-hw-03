'use strict'

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user['mood'] = 'happy';
user.hobby = 'skydiving';
user.premium = false;


const nameOfKeys = Object.keys(user);

for (const key of nameOfKeys) {
  console.log(`${key}: ${user[key]}`);
};