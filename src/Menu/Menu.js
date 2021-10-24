import React, { Component } from 'react';
import hand from '../assets/FFVhand.png'
import cmdmenu from '../assets/cmdmenu.png'
import itemmenuimg from '../assets/itemmenu.png'
import enemymenu from '../assets/enemymenu.png'
import charmenu from '../assets/charmenu.png'
import grassbg from '../assets/grassbg.png'
import Celes from '../assets/Celes.gif'
import './menu.scss'

const imagePath = {
    hand00: null,
    hand01: hand,
    hand02: hand,
    hand03: hand
}
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hand1: true,
            pos: 'pos01',
            itemmenu: 'itemmenu',
            cmdmenu: 'cmdmenu',
            cmdtext: 'cmdtext'
        }
    }

    toggleBits = () => {
        this.setState(state => ({ hand1: !state.hand1 }))
    }



    getHand = () => {

        return this.state.hand1 ? 'hand01' : 'hand02'

    }
    getDown = () => {
        return this.state.hand1 ? 'pos01' : 'pos02'
    }

    toggleSub = () => {
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
            this.setState({ cmdmenu: cmdshow, cmdtext: cmdtext })
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
                <div className="enemymenu">
                    <img src={enemymenu} alt="sprite" className="" />
                </div>
                <div className="charmenu">
                    <img src={charmenu} alt="sprite" className="" />
                </div>
                <div className="charactermenu"></div>
                <div className={this.state.cmdmenu}>
                    <img src={cmdmenu} alt="sprite" className="" />
                </div>
                <div className={this.state.pos} >
                    <img src={imagePath[hand]} alt="hand"/>

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