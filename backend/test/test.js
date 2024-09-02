const sass = require('sass');

const input = `
h1 {
  font-size: 40px;
  code {
    font-face: Roboto Mono;
  }
}`;

const result = sass.compileString(input);
console.log(result.css);

const compressed = sass.compileString(input, {style: "compressed"});
console.log(compressed.css);
