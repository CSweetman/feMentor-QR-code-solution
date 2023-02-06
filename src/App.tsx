import './App.css'
import qr from '/images/image-qr-code.png'
function App() {

  return (
    <div className='bg-primary text-center text-[15px]'>
      <div className="flex flex-col justify-center items-center w-[100vw] h-[90vh]">
        <div className=' w-60 h-120 bg-white rounded-xl'>
          <img className='p-3 rounded-[20px]' src={qr}></img>
          <div className='px-7 pb-5 flex-col flex gap-2'>
          <p className='text-title font-bold'>
            Improve your front-end skills by building projects
          </p>
          <p className='text-subtitle font-normal text-[12px] leading-none'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
          </div>
        </div>
      </div>


      <div className="attribution h-[10vh]">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Christopher Sweetman</a>.
      </div>
    </div>
  )
}

export default App
