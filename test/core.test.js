const assert = require('assert');
const fs = require('fs');
const { parse, print, types }  = require('recast');
const j = types.builders; // eslint-disable-line
const {
  arrowFunctionExpression,
  classDeclaration,
  exportDefaultDeclaration,
  expressionStatement,
  functionDeclaration,
  ifStatement,
  importDeclaration,
  variableDeclaration,
  buildAST,
  callExpression,
  literal,
  identifier,
  memberExpression
} = require('../index.js');

// NOTE: We are not testing the generated api directly here
// Instead we are checking whether the generated api can create 
// the right nodes or not.

describe('Core builder api', function() {
  it('should generate a class declaration', function() {

    const input = fs.readFileSync('test/fixtures/classDeclaration.input.js', 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync('test/fixtures/classDeclaration.output.js', 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate an Arrow Function Expression', function() {

    const input = fs.readFileSync('test/fixtures/arrowFunctionExpression.input.js', 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync('test/fixtures/arrowFunctionExpression.output.js', 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a switch case statement', function() {

    const input = fs.readFileSync('test/fixtures/switch.input.js', 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync('test/fixtures/switch.output.js', 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a variable declaration statement', function() {

    const input = fs.readFileSync('test/fixtures/variableDeclaration.input.js', 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync('test/fixtures/variableDeclaration.output.js', 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate an import declaration statement', function() {

    const input = fs.readFileSync('test/fixtures/importStatement.input.js', 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync('test/fixtures/importStatement.output.js', 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a call expression', function() {

    const fixturePath = 'test/fixtures/callExpression';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a member expression', function() {

    const fixturePath = 'test/fixtures/memberExpression';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a if statement', function() {

    const fixturePath = 'test/fixtures/ifstatement';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a literal', function() {

    const fixturePath = 'test/fixtures/literal';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate an object expression', function() {

    const fixturePath = 'test/fixtures/objectExpression';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate an export default declaration', function() {

    const fixturePath = 'test/fixtures/exportDefaultDeclaration';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a function declaration', function() {

    const fixturePath = 'test/fixtures/functionDeclaration';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a for statement', function() {

    const fixturePath = 'test/fixtures/forStatement';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a try statement', function() {

    const fixturePath = 'test/fixtures/tryStatement';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate an array expression', function() {

    const fixturePath = 'test/fixtures/arrayExpression';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate an assignment expression', function() {

    const fixturePath = 'test/fixtures/assignmentExpression';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a return statement', function() {

    const fixturePath = 'test/fixtures/returnStatement';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a new expression  statement', function() {

    const fixturePath = 'test/fixtures/newExpression';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate an expression  statement', function() {

    const fixturePath = 'test/fixtures/expressionStatement';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });
  
  it('should generate a logical expression', function() {

    const fixturePath = 'test/fixtures/logicalExpression';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a conditional expression', function() {

    const fixturePath = 'test/fixtures/conditionalExpression';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a for in statement', function() {

    const fixturePath = 'test/fixtures/forin';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a spread element', function() {

    const fixturePath = 'test/fixtures/spreadElement';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate a for of statement', function() {

    const fixturePath = 'test/fixtures/forOf';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate an yield expression', function() {

    const fixturePath = 'test/fixtures/yieldExpression';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });

  it('should generate import declarations', function() {

    const fixturePath = 'test/fixtures/importDeclaration';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    let ast = parse(input);

    debugger
    let pseudoAst =  buildAST(ast);
    const sampleCode = '';
    const outputAst = parse(sampleCode);  

    // Check the manifested api is working fine
    pseudoAst.forEach(n => outputAst.program.body.push(eval(n)));

    const code = print(outputAst, { quote: 'single'}).code;
    const output = fs.readFileSync(outputFixture, 'utf-8');

    assert.strictEqual(code, output);

  });
});
