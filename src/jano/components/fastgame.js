import React, { Component } from 'react';

class Fastgame extends Component {
    render() {
        const createFastgmae = () => {
            return(
                <div className='fastgame'>
                        <div className='fastgame__title'>
                            <h2>Fast game</h2>
                        </div>
                        <div className='fastgame__result'>
                            <a href='a'>4</a>
                            <a href='a'>5</a>
                            <a href='a'>6</a>
                            <a href='a'>8</a>
                            <a href='a'>7</a>
                            <a href='a'>0</a>
                        </div>
                        <div className='fastgame__next'>
                            <p>Until next draw</p>
                            <h3>10: 30</h3>
                        </div>
                </div>
            )
        }
        return (
            <div>
                {createFastgmae()}
            </div>
        );
    }
}

export default Fastgame;