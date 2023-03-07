import React, { useState } from 'react'
import DisplayComponent from '../components/DisplayComponent/DisplayComponent'
import EqualsComponent from '../components/EqualsComponent/EqualsComponent'
import NumbersComponent from '../components/NumbersComponent/NumbersComponent'
import OperatorComponent from '../components/OperatorsComponent/OperatorComponent'
import dropImg from '../assets/dropImg.svg'


const Calculator = () => {

  const [calcArray, setCalcArr] = useState([DisplayComponent, OperatorComponent, NumbersComponent, EqualsComponent])
  const [canvasArray, setCanvasArray] = useState<typeof calcArray>([])
  const [currentItem, setCurrentItem] = useState<(() => JSX.Element)[]>([DisplayComponent])

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, element: () => JSX.Element) {
    setCurrentItem([element])
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    e.currentTarget.style.backgroundColor = '#FFFFFF'
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    e.currentTarget.style.backgroundColor = '#F0F9FF'
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>, element: () => JSX.Element) {
    if (canvasArray.find(c => c.name === element.name)) e.currentTarget.style.opacity = '0.5'
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    if (currentItem[0]) setCanvasArray([...canvasArray, currentItem[0]])
    e.currentTarget.style.backgroundColor = '#FFFFFF'
    e.currentTarget.style.alignItems = 'normal'
    e.currentTarget.style.justifyContent = 'normal'
    e.currentTarget.style.border = 'none'
  }

  return (
    <div className='calculator'>
      <div className="constructor-bar">
        {calcArray.map(component =>
          <div
            className='constructor__item'
            draggable={!canvasArray.find(c => c.name === component.name)}
            key={component.toString()}
            onDragStart={(e) => dragStartHandler(e, component)}
            onDragEnd={(e) => dragEndHandler(e, component)}
          >
            {component()}
          </div>
        )}
      </div>
      <div
        className="canvas"
        onDragOver={(e) => dragOverHandler(e)}
        onDragLeave={e => dragLeaveHandler(e)}
        onDrop={(e) => dropHandler(e)}
      >
        {!canvasArray.length ?
          <div className='canvas__content'>
            <img src={dropImg} alt="" />
            <p className='canvas__title'>Перетащите сюда</p>
            <p className='canvas__text'>любой элемент из левой панели</p>
          </div>
          :
          canvasArray.map(component => <div key={component.toString()}>{component()}</div>)
        }
      </div>
    </div>
  )
}

export default Calculator