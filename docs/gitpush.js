var program = require("commander");
 
program
  .option("-f, --flag", "On/Off flag.")
  .option("-m, --message <s>")
  .option("-i, --integer <n>", "Numeric value.", parseInt, 10)
  .option("-l, --list <items>", "Listed value.", (value) => { return (value || []).split(","); }, [])
  .option("-s, --size <size>", "Selected size.", /^(large|medium|small)$/i, "medium")
  .option("-o, --option [value]", "Option value.")
  .option("-v, --variadic [items...]", "Variadic value.")
  .parse(process.argv);
 
var commitmessage  = '✨ release ';
if(program.message){
  commitmessage += program.message;
}
console.log('git pushing...');
return require('simple-git')().add('-A').commit(commitmessage).push(['-u', 'origin', 'master'], () => console.log('push done'));