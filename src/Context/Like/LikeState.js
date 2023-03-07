
import {useState} from 'react'
import { LikeContext } from './LikeContext'

const LikeState = (props) => {
    const [data,setData]=useState([])
    const [whishList,setWhishList]=useState([])
    const handleSet=(item)=>{
        // console.log('item', item)
        
        const isPresent=data.find((value)=>value.id==item.id)
        if(!isPresent){
        setData([...data,item])
        setWhishList([...whishList,item.id])
        }
      
       
    }
    const handleDelete=(deleteProductId)=>{
        setWhishList( whishList.filter((exstingId)=>exstingId!=deleteProductId))
         setData(data.filter(availableData=>availableData.id!=deleteProductId))
    }
  return (
     <LikeContext.Provider value={{data,handleSet,handleDelete,whishList}}>
       {props.children}
     </LikeContext.Provider>
  )
}

export default LikeState