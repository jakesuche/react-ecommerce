const arrayBlog = [1,3,5,4,4,3,7,8,2,1]
const newArray = []
let i = 0
for(i; i < arrayBlog.length; i++){
    console.log(newArray.includes(arrayBlog[i]))
    if(!newArray.includes(arrayBlog[i])){
        newArray.push(arrayBlog[i])
    }

    

    
    
}

console.log(newArray)

