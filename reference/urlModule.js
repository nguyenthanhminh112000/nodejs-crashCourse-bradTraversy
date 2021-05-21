const url = require('url');

const shopeeUrl = new URL('https://shopee.vn/search?keyword=quan%20ao');
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

console.log(shopeeUrl);
console.log(myUrl);
myUrl.searchParams.append('money', '500');
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
