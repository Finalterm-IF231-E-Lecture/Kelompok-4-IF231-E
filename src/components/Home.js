import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Header from './Header'
import { UserContext } from "./UserProvider";
import { render } from 'react-dom'
import moment from 'moment'
import NewsAPI from './NewsAPI'
import avatar1diam from './img/avatar/avatar_1_diam.gif'
import avatar1makan from './img/avatar/avatar_1_makan.gif'


const Home = (props) => {
  const dateTime = new Date ()
  
  return (
    <div>
      <Header />
      <div style={{
        backgroundImage: 'url("./img/background/ruangan_keren.jpg")'
      }}>
        <div className='container-fluid section-play' id='section-play'>
          <div className='box-progress'>
            <div className='row'>
              <div className='col-md-3 my-3'>
                <i class="makan fa-solid fa-utensils fs-5"></i>
                <div class="wrap-item-progress">
                  <div class="progress">
                    <div id="progres-makan" class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className='col-md-3  my-3'>
                <i class="tidur fa-solid fa-bed fs-5"></i>
                <div class="wrap-item-progress">
                  <div class="progress">
                    <div id="progres-tidur" class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 my-3'>
                <i class="game fa-solid fa-gamepad fs-5"></i>
                <div class="wrap-item-progress">
                  <div class="progress">
                    <div id="progres-main" class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 my-3'>
                <i className='belajar fa-solid fa-book fs-5'></i>
                <div className="wrap-item-progress">
                  <div className="progress">
                    <div id="progres-belajar" class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid section-pindah' id='section-pindah'>
          <div className='row'>
            <div className='col-md-2 my-10'>
              <div className='goto'>
                <h1>Go to :</h1>
                <button className='btn-primary'>Kampus</button>
                <br></br>
                <button className='btn-primary'>Kafe</button>
                <br></br>
                <button className='btn-primary'>Supermarket</button>
              </div>
            </div>
            <div className='col-md-8 my-10'>
              <div className='greeting'>
                <h1> {moment(dateTime).format('lll')}</h1>
                <h1>Good Morning {props.input}</h1>
                <img src={avatar1diam} alt='avatar1diam' />
              </div>
            </div>
            <div className='col-md-2 my-10'>
              <div className='kegiatan'>
                <h1>@Home</h1>
                <button className='btn-success' >Makan</button>
                <br></br>
                <button className='btn-success'>Tidur</button>
                <br></br>
                <button className='btn-success'>Main</button>
              </div>
            </div>
            <div className='col-md-2 my-10'>
              <div className='NewsAPI'>
                <NewsAPI />
              </div>
            </div>
            <div className='col-md-8 my-10'>
              <div id='btn-reset' className='reset my-2 fs-3 btn btn-danger btn-play my-2 fw-bold' onClick={() => props.backClick()}>BACK <i className='fa-solid fa-arrows-rotate'></i>
              </div>
            </div>
            <div className='col-md-2 my-10'>
              <div className='AboutUs'>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Home