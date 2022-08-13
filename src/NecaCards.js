// import React, { useState } from 'react'
import NecaCard from './NecaCard'
import "./NecaCards.css"
// import photo1 from "./Pictures/Meedarh.jpeg"
// import photo2 from "./Pictures/Wasiu.jpeg"
// import photo3 from "./Pictures/Daniel.JPG"
// import photo4 from "./Pictures/Oluniyi-Israel.jpeg"
// import photo5 from "./Pictures/Damos.jpeg"
// import photo6 from "./Pictures/Maryam.jpeg"
// import photo7 from "./Pictures/Rasheed.jpeg"
// import photo8 from "./Pictures/Olaniyi-Israel.jpeg"
// import photo9 from "./Pictures/lumi.jpeg"
// import photo10 from "./Pictures/Mr martins.jpeg"
// import photo11 from "./Pictures/Gabby.jpeg"
// import photo12 from "./Pictures/Ebenezer.jpeg"
// import photo13 from "./Pictures/victor.JPG"
// import photo14 from "./Pictures/Somtoo.jpeg"


function NecaCards(props) {
//   const [Pics] = useState([
//     {
//       id: 1,
//       img:photo1
//     },
    
//     {
//       id: 2,
//       img:photo2
//     },
    
//     {
//       id: 3,
//       img:photo3
//     },
    
//     {
//       id: 4,
//       img:photo4
//     },
    
//     {
//       id: 5,
//       img:photo5
//     },
    
//     {
//       id: 6,
//       img:photo6
//     },
    
//     {
//       id: 7,
//       img:photo7
//     },
    
//     {
//       id: 8,
//       img:photo8
//     },

//     {
//       id: 9,
//       img:photo9
//     },
    
//     {
//       id: 10,
//       img:photo10
//     },
    
//     {
//       id: 11,
//       img:photo11
//     },
    
//     {
//       id: 12,
//       img:photo12
//     },
    
//     {
//       id: 13,
//       img:photo13
//     },
    
//     {
//       id: 14,
//       img:photo14
//     },
    
//   ])


  return (
    <div className='usercard'>


      {
      props.members.map((mem) => (
        <NecaCard
        key={mem.id.toString()}
        name1={mem.name}
        image1={mem.image}
        username1={mem.username}
        github1={mem.github_link}
        alt={""}
        />
      ))}
    
      {
            props.userss.map((userz) =>(
            <NecaCard
            key={userz.id.toString()}
            name={userz.name}
            username={userz.username}
            image={userz.image}
            github={userz.github_link}
            mfriends={userz.mfriends}
            friends={userz.friends}
            friends2={userz.friends2}
            location={userz.location}
            alt={""}
            />
            ))         
            }
      </div>
  )
}

export default NecaCards
