import React, { useEffect } from 'react'
import members from '@/githubInfo/members.json'
import Aos from 'aos'
import { primaryColor } from '@/config/color'
import { LightMember, People } from '@icon-park/react'
const AppShowCase = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])
  return <section className='' data-aos="zoom-in">
    <p style={{ color: primaryColor.alpha(0.1).toString() }}>3333</p>

    <h1 className="mb-[50px] md:text-3xl text-2xl justify-center flex  text-center font-bold " style={{ color: primaryColor.darken(0.5).toString() }}>
      <People className='mr-3' style={{
        color: primaryColor.toString()
      }}></People>
      Become a contributor to Chunjun</h1>
    <div className="grid md:grid-cols-6 gap-2 rounded-md grid-cols-2 border p-[30px]"
      style={{
        borderColor: primaryColor.darken(0.1).toString(),
        color: primaryColor.darken(0.5).toString(),
      }}>
      {members.map(item => <div key={item.id} className="    flex items-center justify-between m-sm hover:bg-gray-50  hover:shadow-md transition-all duration-100">
        <img
          width={40}
          height={40}
          src={`https://github.com/${item.login}.png?size=40`}
          alt=""
        />{' '}
        <a href={item.html_url} target="blank" className='flex-1 text-center'>
          <span className="font-mono text-sm"> {item.login} </span>
        </a>
      </div>)}
    </div>
  </section>
}

export default AppShowCase
