import React, {Component} from 'react'
export default class Pay extends Component{
    render(){
        const createPay = () => {
            return(
                <div className='pay'>
                    <div className='cards'>
                        <div className='master__card'>
                            <img src={require('../assets/img/master_card.png')} alt=""/>
                            <img src={require('../assets/img/master_card.png')} alt=""/>
                        </div>
                        <div className='visa'>
                            <img src={require('../assets/img/visa.png')} alt=""/>
                            <img src={require('../assets/img/visa.png')} alt=""/>
                        </div>    
                    </div>
                    <div className='cards'>
                        <div className='master__card'>
                            <img src={require('../assets/img/master_card.png')} alt=""/>
                            <img src={require('../assets/img/master_card.png')} alt=""/>
                        </div>
                        <div className='visa'>
                            <img src={require('../assets/img/visa.png')} alt=""/>
                            <img src={require('../assets/img/visa.png')} alt=""/>
                        </div>    
                    </div>
                    <div className='cards'>
                        <div className='master__card'>
                            <img src={require('../assets/img/master_card.png')} alt=""/>
                            <img src={require('../assets/img/master_card.png')} alt=""/>
                        </div>
                        <div className='visa'>
                            <img src={require('../assets/img/visa.png')} alt=""/>
                            <img src={require('../assets/img/visa.png')} alt=""/>
                        </div>    
                    </div>
                    <div className='cards'>
                        <div className='master__card'>
                            <img src={require('../assets/img/master_card.png')} alt=""/>
                            <img src={require('../assets/img/master_card.png')} alt=""/>
                        </div>
                        <div className='visa'>
                            <img src={require('../assets/img/visa.png')} alt=""/>
                            <img src={require('../assets/img/visa.png')} alt=""/>
                        </div>    
                    </div>
                </div>
            )
        }
        return(
            <div>
                {createPay()}
            </div>
        )
    }
}