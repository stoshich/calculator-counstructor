import './App.css'
import DisplayComponent from './components/DisplayComponent/DisplayComponent'
import EqualsComponent from './components/EqualsComponent/EqualsComponent'
import NumbersComponent from './components/NumbersComponent/NumbersComponent'
import OperatorComponent from './components/OperatorsComponent/OperatorComponent'
import dropImg from './assets/dropImg.svg'

function App() {

  return (
    <div className="App">
      <div className='header'>

      </div>
      <div className="constructor-bar">
        <DisplayComponent />
        <OperatorComponent />
        <NumbersComponent />
        <EqualsComponent />
      </div>
      <div className="canvas">
        <div className='canvas__content'>
          <img src={dropImg} alt="" />
          <p className='canvas__title'>Перетащите сюда</p>
          <p className='canvas__text'>любой элемент из левой панели</p>
        </div>
      </div>
    </div>
  )
}

export default App
