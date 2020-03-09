import React, { Component } from 'react'
import { sample, shuffle } from 'lodash'

import './styles/Menu.css';

export default class Mene extends Component {
    state = {
        isClicked: false,
        colors: ['#E1BEE7', '#C5CAE9', '#B3E5FC', '#C8E6C9', '#FFF3E0', '#FFCCBC']
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    changeColor = () => {
        return {
            backgroundColor: sample(this.state.colors),
        }
    }

    render() {
        const links = [
            {
                label: 'TicTacToe',
                url: 'https://poy4n.github.io/tictactoe/'
            },
            {
                label: 'Emotions',
                url: 'https://emotions-tracker.herokuapp.com/'
            },
            {
                label: 'FlashZoo',
                url: 'https://beasuf.github.io/flash_zoo_client/'
            },
            {
                label: 'SolarSystem',
                url: 'https://solar-planets-app.herokuapp.com/'
            },
            {
                label: '',
                url: ''
            },
        ]
        
        const { isClicked } = this.state
        return (
            <div className="menu-container">
                <div className="menu-button" onClick={ this.handleClick }>
                    <i className="fal fa-bars"></i>
                </div>

                { links.length && (
                    <nav className={ `menu ${isClicked ? 'show' : ''}` }>
                        <ul className="menu-items">
                            { shuffle(links.map(item => (
                                <li style={ this.changeColor(item.label) } className="menu-list" key={ item.label }>
                                    <a className="menu-link" href={ item.url } target="_blank">{ item.label }</a>
                                </li>
                            )))}
                        </ul>
                    </nav>
                )} 
            </div>
        )
    }
}