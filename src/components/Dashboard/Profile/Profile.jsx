/* eslint-disable no-unused-vars */
import React from 'react';
import "./Profile.css";
// :lnbf nml,dsd,lc lc
import calendar from '../../../assets/images/profiles_image/1.png'
import phone from '../../../assets/images/profiles_image/2.png'
import mail from '../../../assets/images/profiles_image/3.png'
import gender from '../../../assets/images/profiles_image/4.png'
import location from '../../../assets/images/profiles_image/5.png'
import profile_pic from '../../../assets/images/profiles_image/6.png'
import upload_image from '../../../assets/images/profiles_image/7.png'

const Profile = () => {
  const profile_aargs = [
    {id:1, image: calendar, param:"dd/mm/yyyy"},
    {id:2, image: phone, param:"+033 000000000"},
    {id:3, image: mail, param:"email@example.com"},
    {id:4, image: gender, param:"Gender"},
    {id:5, image: location, param:"Location"}
  ]
  return (
    <div className='profile_container'>
    <div className='prof_pic'>
      <img src={profile_pic} alt='profile image' />
    </div>
    <div className='profile_info'>
      <h1>FirstName SecondName</h1>
    {profile_aargs.map(obj=>
    <div key={obj.id} className='profile_detail'>
        <img src={obj.image}/>
        <h3>{obj.param}</h3>
        
    </div>
  )}
  </div>
    </div>
  )
}

export default Profile;