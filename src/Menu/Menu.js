import React, { Component } from 'react';
import hand from '../assets/FFVhand.png'
import cmdmenu from '../assets/cmdmenu.png'
import itemmenuimg from '../assets/itemmenu.png'
import enemymenu from '../assets/enemymenu.png'
import charmenu from '../assets/charmenu.png'
import grassbg from '../assets/grassbg.png'
import Celes from '../assets/Celes.gif'
import DKAction from '../assets/dkaction.gif'
import DK from '../assets/dk.png'
import DKCheer from '../assets/dkcheer.png'
import Ra from '../assets/ffrkranger.png'
import RaAction from '../assets/ffrkrangeraction.gif'
import RaCheer from '../assets/ffrkrangercheer.png'
import Emunisa from '../assets/emunisa.png'
import EmunisaCheer from '../assets/emunisacheer.png'
import EmunisaAction from '../assets/emunisaanimated.gif'
import './menu.scss'

const imagePath = {
    hand00: null,
    hand01: hand,
    hand02: hand,
    hand03: hand
}

const brood = {
    name: 'Brood',
    health: '8340/9422',
    sprite: Celes,
    action: Celes,
    cheer: Celes
}

const emunisa = {
    name: 'Emunisa',
    health: '3434/5343',
    sprite: Emunisa,
    action: EmunisaAction,
    cheer: EmunisaCheer
}

const deathknight = {
    name: 'TwitchUser',
    health: '3455/4444',
    sprite: DK,
    action: DKAction,
    cheer: DKCheer
    
}

const ranger = {
    name: 'placeholder',
    health: '3455/4444',
    sprite: Ra,
    action: RaAction,
    cheer: RaCheer
}

const spriteTable = [
    deathknight, ranger
]

const modTable = [
    emunisa
]
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hand1: true,
            pos: 'pos00',
            itemmenu: 'itemmenu',
            cmdmenu: 'cmdmenu',
            cmdtext: 'cmdtext',
            brood: brood,
            sp02: spriteTable[0],
            sp02sprite: spriteTable[0].sprite,
            mod: modTable[0]
        }
    }

    toggleBits = () => {
        this.setState(state => ({ hand1: !state.hand1 }))
    }



    getHand = () => {

        return this.state.hand1 ? 'hand01' : 'hand01'

    }
    getDown = () => {
        return this.state.hand1 ? 'pos01' : 'pos02'
    }

    toggleSub = () => {
        const pos00 = 'pos00'
        const pos01 = 'pos01'
        const pos02 = 'pos02'
        const pos03 = 'pos03'
        const pos04 = 'pos04'
        const pos05 = 'pos05'
        const itempos01 = 'itempos01'
        const itempos02 = 'itempos02'
        const itempos03 = 'itempos03'
        const itemshow = 'itemmenu__show'
        const itemhide = 'itemmenu'
        const cmdshow = 'cmdmenu__show'
        const cmdtext = 'cmdtext__show'
        setTimeout(() => {


            this.setState({ cmdmenu: cmdshow, cmdtext: cmdtext, sp02sprite: this.state.sp02.action })
            setTimeout(() => {
                this.setState({ pos: pos01 })
                setTimeout(() => {
                    this.setState({ pos: pos02 })
                    setTimeout(() => {
                        this.setState({ pos: pos03 })
                        setTimeout(() => {
                            this.setState({ pos: pos04 })
                            setTimeout(() => {
                                this.setState({ pos: pos05 })
                                setTimeout(() => {
                                    this.setState({ itemmenu: itemshow })
                                    setTimeout(() => {
                                        this.setState({ pos: itempos01 })
                                        setTimeout(() => {
                                            // this.setState({itemmenu: itemhide})
                                            this.setState({ pos: itempos02 })
                                            setTimeout(() => {
                                                // this.setState({itemmenu: itemhide})
                                                this.setState({ pos: itempos03 })
                                                setTimeout(() => {
                                                    this.setState({ itemmenu: itemhide })
                                                    setTimeout(() => {
                                                        this.setState({ pos: pos00, cmdtext: 'cmdtext', cmdmenu: 'cmdmenu', sp02sprite: this.state.sp02.cheer})
                                                        setTimeout(() => {
                                                            this.setState({ sp02sprite: this.state.sp02.sprite})
                                                        }, 350)
                                                    }, 150)
                                                }, 150)
                                            }, 150)
                                        }, 150)
                                    }, 150)
                                }, 150)
                            }, 150)
                        }, 150)
                    }, 150)
                }, 150)
            }, 150)

        }, 150)


    }

    render() {
        const hand = this.getHand();

        return (

            <div className="div">
                <div className="background">
                    <img src={grassbg} alt="background" className="" />
                </div>
                <div className="sprite01">
                    <img src={Celes} alt="sprite" className="" />
                </div>
                <div className="sprite02">
                    <img src={this.state.sp02sprite} alt="sprite" className="" />
                </div>
                <div className="sprite03">
                    <img src={this.state.mod.sprite} alt="sprite" className="" />
                </div>
                <div className="enemymenu">
                    <img src={enemymenu} alt="sprite" className="" />
                </div>
                <div className="charmenu">
                    <img src={charmenu} alt="sprite" className="" />
                    <div className="chartext">
                        <p className="chartext--ch01">{this.state.mod.name}</p>
                        <p className="chartext--ch01__health">{this.state.mod.health}</p>
                        <p className="chartext--ch02">{this.state.brood.name}</p>
                        <p className="chartext--ch02__health">{this.state.brood.health}</p>

                        <p className="chartext--ch03">{this.state.sp02.name}</p>
                        <p className="chartext--ch03__health">{this.state.sp02.health}</p>
                    </div>
                </div>
                <div className="charactermenu"></div>
                <div className={this.state.cmdmenu}>
                    <img src={cmdmenu} alt="sprite" className="" />
                </div>
                <div className={this.state.pos} >
                    <img src={imagePath[hand]} alt="hand" />

                </div>
                <div className={this.state.cmdtext}>
                    <div className="menutext01">
                        Fight
                    </div>
                    <div className="menutext02">
                        Cmd
                    </div>
                    <div className="menutext03">
                        Blk
                    </div>
                    <div className="menutext04">
                        Wht
                    </div>
                    <div className="menutext05">
                        Item
                    </div>
                </div>

                <div className={this.state.itemmenu}>
                    <div className="itemmenutext01">
                        Bit: 100
                    </div>
                    <div className="itemmenutext02">
                        Subscription: 1
                    </div>
                    <div className="itemmenutext03">
                        Giftsub: 5
                    </div>
                    <div className="itemmenutext04">
                        Donation: $100
                    </div>
                    <div className="itemmenubox">
                        <img src={itemmenuimg} alt="menubox" />
                    </div>





                </div>
                <button onClick={this.toggleBits} className="btn">Bits</button>
                <button onClick={this.toggleSub} className="btn">Subscription</button>
            </div>


        );
    }
}

export default Menu;