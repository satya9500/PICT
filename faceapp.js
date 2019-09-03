let faceapp = require('faceapp')
let superagent = require('superagent')
let imgurUploader = require('imgur-uploader');

async function processImage(link, filter) {
    //let image = await faceapp.process(imagelink,filter);
    let { body } = await superagent.get(link)
    let image = await faceapp.process(body, filter)
    console.log(image)
    if (image != 'undefined') {
        ramdomTitle = Math.random().toString(36).substring(7);
        imgurUploader(image, { title: ramdomTitle }).then(data => {
            console.log(data.link)
        });
    }
    else {
        console.log("Error: Issue in Creating Image");
    }
}
processImage('https://i.imgur.com/y62zV0L.jpg', 'heisenberg')