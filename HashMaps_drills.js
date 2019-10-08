const HashMap = require('./HashMaps')

function main(){
    const lor = new HashMap()

    HashMap.MAX_LOAD_RATIO = 0.5
    HashMap.SIZE_RATIO = 3

    lor.set("Hobbit", "Bilbo")
    lor.set("HoBbit", "Frodo")
    lor.set("Wizard", "Gandolf")
    lor.set("Human", "Aragon")
    lor.set("Elf", "Legolas")
    lor.set("Maiar", "The Necromancer")
    lor.set("Maiar", "Sauron")
    lor.set("RingBearer", "Gollum")
    lor.set("LadyOfLight", "Galadriel")
    lor.set("HalfElven", "Arwen")
    lor.set("Ent", "Treebeard")

    console.log(lor)
    console.log(lor.get('Hobbit'))
}

main()
// Assignment 1. 
// 11 items were set but the length is only 9
// the first Hobbit and Maiar are both gone
// the key is the same, so set just changes the value
// the capacity has increased to 24

// Assignment 2.
// the maps would have the same length, same Key, but the paired values would be different

// Assignment 3.
// Open-Addressing: 0:{22}, 1:{88}, 2:{}, 3:{}, 4:{4}, 5:{15}, 6:{28}, 7:{17}, 8:{59}, 9:{31}, 10:{10}, 11:{}
// Seperate-Chaining: 0:{}, 1:{28, 19, 10}, 2:{20}, 3:{12}, 4:{}, 5:{5}, 6:{15, 33}, 7:{}, 8:{17}, 9:{}

// Assignment 4.
function rmvDuplicates(str) {
    const hash = new HashMap()

    let newArr = []

    for(let i = 0; i < str.length; i++){
        hash.set(str.charAt(i), str.charAt(i))
    }

    for(let i = 0; i < str.length; i++){

        if(hash.get(str.charAt(i))){
            newArr.push(hash.get(str.charAt(i)))
            hash.delete((str.charAt(i)))
        }
    }

    console.log(newArr)
}
let test_4_str = 'google'
rmvDuplicates(test_4_str)

// Assignment 5.
// function palindrome(str) {
//     const hash = new HashMap

//     for(let i = 0; i < str.length; i++) {
//         if(!hash.get(str[i])) {
//             hash.set(str[i], str[i])
//         }

//     }
// }