import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import apointmentMainPng from './assets/apointment-app.png'

function App() {

  const [apointmentData, setApointmintData] = useState({
    title:"",
    date:"",
    isStarred: false,
  })
  const [apointmentDataList, setApointmintDataList] = useState([])
  const [showStarred, setShowStarred] = useState(false)

  function handleChange(e){
    const {name, value} = e.target
    setApointmintData(prevAppointmentData => ({
      ...prevAppointmentData,
      [name]: value,
    }))
  }

  function addApointment(){
    setApointmintDataList(prevList => [...prevList,apointmentData])
  }

  function togleStarred(title){
    setApointmintDataList(prevList => 
      prevList.map(data =>
        data.title === title ? { ...data, isStarred: !data.isStarred} : data
      )
    )
  }

  const apointmentCards = apointmentDataList.map((item, index) => {
    return(
      <Card
        key={index}
        title={item.title}
        date={item.date}
        isStarred={item.isStarred}
        togleStarred={() => togleStarred(item.title)}
      />
    )
  })

  const starredApointmentCards = apointmentDataList.filter(item => item.isStarred).map((item, index) => {
    return(
      <Card
        key={index}
        title={item.title}
        date={item.date}
        isStarred={item.isStarred}
        togleStarred={() => togleStarred(item.title)}
      />
    )
  })

  return (
    <>
    <main className='flex justify-center '>
      <section className='flex mt-[4rem] mx-[4rem] justify-between w-full border-b-2 border-gray-400 '>
        <div className='flex flex-col w-[40%] '>
            <h2 className='text-4xl font-bold mb-[2rem] '>Add Apointment</h2>
            <label className='text-gray-500 font-bold mb-[0.5rem] ' htmlFor="title">TITLE</label>
            <input onChange={handleChange} className='border-2 py-[5px] px-[1rem] rounded-[5px] mb-[1rem] ' type="text" name="title" id="title" placeholder='Title' />
            <label className='text-gray-500 font-bold mb-[0.5rem] ' htmlFor="data">DATE</label>
            <input onChange={handleChange} className='border-2 py-[5px] px-[1rem] rounded-[5px] mb-[1rem] ' type="date" name="date" id="date" />
            <button onClick={addApointment} className='text-white border-2 border-violet-500 bg-violet-500 w-fit py-[5px] px-[1rem] rounded-[5px] cursor-pointer hover:text-violet-500 hover:bg-white '>Add</button>
        </div>
        <img className='contain h-[400px] w-[50%] ' src={apointmentMainPng} alt="" />
      </section>
    </main>
    <section className='mx-[4rem] my-[2rem] '>
      <div className='flex justify-between mx-[1rem] mb-[2rem] '>
        <h2 className='text-3xl font-bold'>Appointments</h2>
        <button onClick={() => setShowStarred(prev => !prev)} className='border-2 text-violet-500 border-violet-500 px-[1rem] rounded-3xl hover:text-white hover:bg-violet-500 cursor-pointer ' >{ !showStarred ? "Starred" : "Show All"}</button>
      </div>
      <div className='flex gap-4 flex-wrap'>
        {
          showStarred ?
          starredApointmentCards:
          apointmentCards
        }
      </div>
      
    </section>
    </>
  )
}

export default App
