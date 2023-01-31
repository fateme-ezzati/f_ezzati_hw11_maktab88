const {existsSync} = require('node:fs')

if(existsSync("text.text")){
    console.log('text.text exist in folder 3.')
}else{
    console.log('there is no text file in folder 3')
}


if(existsSync("../1/text.text")){
    console.log('text.text exist in folder 1.')
}else{
    console.log('there is no text file in folder 1')
}
