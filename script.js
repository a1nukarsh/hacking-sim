console.log("Hack");

const randomDelay = ()=>{
    return new Promise((resolve, reject)=>{
        timeout = 1 + 6*Math.random()
        setTimeout(()=>{
            resolve()
        }, timeout)
    })
}

let text = [
  "Initializing Hacking...",
  "Reading your files...",
  "Password files detected...",
  "Sending all passwords and personal files to server...",
  "Cleaning up...",
];

for (const item of text) {
    addItem()
}

const addItem = async ()=>{

}