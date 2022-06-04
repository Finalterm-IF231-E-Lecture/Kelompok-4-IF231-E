import React, { useState, useContext, useEffect }from 'react'
import { datadogLogs } from "@datadog/browser-logs";
import { datadogRum } from "@datadog/browser-rum";
import ls from "local-storage";
import avatar1diam from './img/avatar/avatar_1_diam.gif'
import avatar2diam from './img/avatar/avatar_2_diam.gif'
import avatar3diam from './img/avatar/avatar_3_diam.gif'
import AboutUs from './AboutUs';

const MainForm = (props) => {

  return (
    <>
 
      <section>
        <div className='container-fluid section-started' id='section-started'>
          <h1 className='fs-2 my-2 title text-center'>Pilih Avatar</h1>
          <div className='pilih-avatar position-relative'>
            <div className='nav-icon nav-left' id='nav-left'>
              <button className='fa-solid fa-caret-left'></button>
            </div>
            <div className='avatar'>
              <img src={avatar1diam} alt='avatar1diam' className='img-fluid'/>
            </div>
            <div className='nav-icon nav-right' id='nav-right'>
              <button className='fa-solid fa-caret-right'></button>
            </div>
          </div>
        </div>
        <h6>Enter your name here...</h6>
        <input type='text' className='input-name form-control-sm d-block m-auto my-3'/>
        <select className='select-prodi'>
          <option value="Informatika">Informatika</option>
          <option value="Teknik Elektro">Teknik Elektro</option>
          <option value="Teknik Fisika">Teknik Fisika</option>
          <option value="Sistem Informasi">Sistem Informasi</option>
          <option value="DKV">DKV</option>
          <option value="Film">Film</option>
          <option value="Akuntasi">Akuntasi</option>
          <option value="Manejemen">Manejemen</option>
        </select>
        <br></br>
        <button className='btn-start btn btn-primary mr-1' onClick={() => props.buttonClick()} >START</button>
      </section>
      <div className='AboutUs'>
        <AboutUs />
      </div>
    </>  
  ) 
}

export default MainForm