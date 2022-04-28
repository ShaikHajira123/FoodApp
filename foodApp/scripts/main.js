async function apiCall(url){
    try{
        let res=await fetch(url)
        let data=await res.json()
        return data
    }catch(error){
        console.log(error)
    }
}

function appendrecipe(data,parent){
  data.meals.forEach(elem => {
      
 
        let div=document.createElement('div')
        div.setAttribute('id','image')
        let image=document.createElement('img')
        image.src=elem.strMealThumb
        let h3=document.createElement('h3')
        h3.innerText=elem.strMeal
          
         div.append(image,h3)
         parent.append(div)

    
  })
}
function appendsearchrecipe(data,parent){
    data.meals.forEach(elem =>{
        let div=document.createElement('div')
        div.setAttribute('id','getrecipe')

        let div1=document.createElement('div')
        div1.setAttribute('id','getrecipe1')

        let image=document.createElement('img')
        image.src=elem.strMealThumb

        
        let h3=document.createElement('h3')
        h3.innerText=`Name : ${elem.strMeal}`

        let div2=document.createElement('div')


        let p=document.createElement('p')
        p.innerHTML=`Ingredients  ${elem.strIngredient1}`

        let p1=document.createElement('p')
        p1.innerHTML= elem.strIngredient2

        let p2=document.createElement('p')
        p2.innerHTML= elem.strIngredient3

        let p3=document.createElement('p')
        p3.innerHTML= elem.strIngredient4

        let p4=document.createElement('p')
        p4.innerHTML= elem.strIngredient5

        let p5=document.createElement('p')
        p5.innerHTML= elem.strIngredient6

        let p6=document.createElement('p')
        p6.innerHTML= elem.strIngredient7

        let p7=document.createElement('p')
        p7.innerHTML= elem.strIngredient8

        let p8=document.createElement('p')
        p8.innerHTML= elem.strIngredient9

       
         let div3=document.createElement('div')
         let p10=document.createElement('p')
         p10.innerHTML=`Measures : ${elem.strMeasure1}`

         let p11=document.createElement('p')
         p11.innerHTML=` : ${elem.strMeasure2}`

         let p12=document.createElement('p')
         p12.innerHTML=` : ${elem.strMeasure3}`

         let p13=document.createElement('p')
         p13.innerHTML=` : ${elem.strMeasure4}`

         let p14=document.createElement('p')
         p14.innerHTML=` : ${elem.strMeasure5}`

         let p15=document.createElement('p')
         p15.innerHTML=` : ${elem.strMeasure6}`

         let p16=document.createElement('p')
         p16.innerHTML=` : ${elem.strMeasure7}`

         let p17=document.createElement('p')
         p17.innerHTML=` : ${elem.strMeasure8}`

         let p18=document.createElement('p')
         p18.innerHTML=`: ${elem.strMeasure9}`

         let div4=document.createElement('div')
         div4.style.width="400px"
         let p9=document.createElement('p')
         p9.innerHTML= `Procedure : 
         ${elem.strInstructions}`
         p9.style.fontSize="20px"

        div1.append(image,h3)
        div2.append(p,p1,p2,p3,p4,p5,p6,p7,p8)
        div3.append(p10,p11,p12,p13,p14,p15,p16,p17,p18)
        div4.append(p9)
        div.append(div1,div2,div3,div4)
        parent.append(div)
    })
}


export {apiCall,appendrecipe,appendsearchrecipe}
