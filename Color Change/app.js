'use strict'


let fun=()=>{
    let a=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

    let c='#'

    for(let i=0;i<6;i++)
    {

    c+=(a[Math.floor(Math.random()*10)])

    }


    document.getElementById('b1').style.backgroundColor=""+c
    
    document.getElementsByName('h1').value=`Color is ${c}`

}

document.getElementById('clk').addEventListener('click',fun)