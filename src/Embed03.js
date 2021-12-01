import React from "react";

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Embed extends React.Component {
    componentDidMount() {
    let embed;
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      EMBED_URL
    );
    script.addEventListener('load', () => {
      embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
    });
        document.body.appendChild(script);
  }

  render() {

    return (
        <div>
    
        <div id={this.props.targetID}></div>
      </div>
    )
  }
}

Embed.defaultProps = {
    targetID: 'twitch-embed',

  channel: 'FFTBattleground',
  height: '600',
  width: '510'

}

export default Embed;