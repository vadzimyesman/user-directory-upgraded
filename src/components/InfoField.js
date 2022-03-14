import React, { useState } from 'react'
import CurrentPage from './CurrentPage'
import data from '../data'
import NewUser from './NewUser'
import UpdateUser from './UpdateUser'




function InfoField() {

    const previousText ="< Previous"
    const nextText ="Next >"
    const [currentUserId, setCurrentUserId]=useState(0)
    const [datas,setDatas]=useState(data)
    //const [deletedUsers, setDeletedUsers]=useState([])
    const [displayFormStatus, setDisplayFormStatus]=useState(false)
    const [updateFormStatus, setUpdateFormStatus]=useState(false)
    let dog="dog"
    const buttonPrevious=()=>{
      if (currentUserId!==0){
        setCurrentUserId(currentUserId-1)
    }
        
      } 

    const buttonNext=()=>{
        if (currentUserId!==datas.length-1){
          setCurrentUserId(currentUserId+1)
      }
      dog="cat"
      console.log(dog)
    }


    
    const buttonDelete=()=>{
      console.log(datas[currentUserId].favoriteMovies)
      console.log(currentUserId,datas.length-1)

      currentUserId<datas.length-1 ? setCurrentUserId(currentUserId) : setCurrentUserId(currentUserId-1)
      setDatas(datas.filter((item,index)=>currentUserId!==index))
      
      // let array = deletedUsers
      // array.push(currentUserId)
      // setDeletedUsers(array)
      // console.log(deletedUsers)
      // setCurrentUserId(currentUserId+1)
    }

  
    
      //console.log(data[currentUserId].favoriteMovies)
      // let  favoriteMoviesList=datas[currentUserId].favoriteMovies.map((element, index)=>{
      //   return <li className='infoText2' key={index}>{element}</li>
      // })



    
console.log(`OOOOOOOOOOOOOOOOOO ${currentUserId}`)
console.log(datas)  
return (
    <div>
      <header className='header'>Home</header>
    <div className='blackCont'>
      
 {!displayFormStatus&&    <div className='whiteCont'>
      <CurrentPage pageNumber={currentUserId+1} numberOfUsers={datas.length} />
      <div>
      <p>{dog} </p>
      <h4></h4>
      <h5 className='names'>{datas[currentUserId].name.first} {datas[currentUserId].name.last}</h5>
      <div className='userInfo1'>
        <div className='flexText'><h5 className='infoText3'>From:&nbsp;</h5><h5 className='infoText2'>{datas[currentUserId].city}, {datas[currentUserId].country}</h5></div>
        <div className='flexText'><h5 className='infoText3'>Job Title:&nbsp;</h5><h5 className='infoText2'>{datas[currentUserId].title}</h5></div>
        <div className='flexText'><h5 className='infoText3'>Employer:&nbsp;</h5><h5 className='infoText2'>{datas[currentUserId].employer}</h5></div>
      </div>

      <div ><h5 className='infoText3 favMovies' >Favourite Movies:</h5>
        <ol className='movieList'>
          {datas[currentUserId].favoriteMovies.map((element, index)=>{
        return <li className='infoText2' key={index}>{element}</li>
      })}
        </ol>
      </div>
      </div>  
      </div>}
{!displayFormStatus &&      <div className='allButtons'>
      <button
        className='routing'
        onClick={buttonPrevious}
        >{previousText}</button>
      <div className='modify'>
        <button
        className='modifyButtons'
        onClick={()=>{setUpdateFormStatus(true)
          }
        }
        >Edit</button>
        <button
        className='modifyButtons'
        onClick={buttonDelete}
        >Delete</button>
        <button
        className='modifyButtons'
        onClick={()=>setDisplayFormStatus(true)}
        >New</button>
      </div>
      <button
        onClick={buttonNext}
        className='routing'
        >{nextText}</button>
      </div>}

      {displayFormStatus && <NewUser display={setDisplayFormStatus}    setDatas={setDatas}  datas={datas}/>}
      {updateFormStatus && <UpdateUser update={setUpdateFormStatus} currentId={currentUserId}  setDatas={setDatas} datas={datas}/>}
      
    </div>
    </div>
    
  )
}

export default InfoField


// {
//   id: 1,
//   name: { first: "Waylin", last: "Lumsdon" },
//   city: "Likiep",
//   country: "Marshall Islands",
//   employer: "Twinder",
//   title: "Physical Therapy Assistant",
//   favoriteMovies: [
//     "That Night in Varennes (Nuit de Varennes, La)",
//     "Spy(ies) (Espion(s))",
//     "Klip (Clip)"
//   ]
// }