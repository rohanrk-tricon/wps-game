import * as React from 'react';
import Phaser from 'phaser';
import OutlinePipelinePlugin from 'phaser3-rex-plugins/plugins/outlinepipeline-plugin.js';
import GameScene from '../../../scenes/Game';
import DropShadowPipelinePlugin from 'phaser3-rex-plugins/plugins/dropshadowpipeline-plugin.js';
import './GameOne.scss';
import { useNavigate } from 'react-router-dom';

export function GameOne() {
  let navigate = useNavigate();
  const config = {
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
    },
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false,
      },
    },
    plugins: {
      global: [
        {
          key: 'rexOutlinePipeline',
          plugin: OutlinePipelinePlugin,
          start: true,
        },
        {
          key: 'rexDropShadowPipeline',
          plugin: DropShadowPipelinePlugin,
          start: true,
        },
      ],
    },
    scene: [GameScene],
  };
  // Anything in here is fired on component mount.
  const phaserGame = new Phaser.Game(config);
  React.useEffect(() => {
    console.log('in useff');

    // const config = {
    //   type: Phaser.AUTO,
    //   scale: {
    //     mode: Phaser.Scale.FIT,
    //   },
    //   width: window.innerWidth * window.devicePixelRatio,
    //   height: window.innerHeight * window.devicePixelRatio,
    //   physics: {
    //     default: 'arcade',
    //     arcade: {
    //       gravity: { y: 0 },
    //       debug: false,
    //     },
    //   },
    //   plugins: {
    //     global: [
    //       {
    //         key: 'rexOutlinePipeline',
    //         plugin: OutlinePipelinePlugin,
    //         start: true,
    //       },
    //       {
    //         key: 'rexDropShadowPipeline',
    //         plugin: DropShadowPipelinePlugin,
    //         start: true,
    //       },
    //     ],
    //   },
    //   scene: [GameScene],
    // };
    // // Anything in here is fired on component mount.
    // const phaserGame = new Phaser.Game(config);
    // console.log('conf', config);
    // console.log('game config--', phaserGame);

    return () => {
      // Anything in here is fired on component unmount.

      //When we navigate to different route the game is destroyed.
      // this.phaserGame.destroy(true);
      // When we navigate to different route the game is destroyed, but assets and all are not destroyed.
      phaserGame.destroy(true, false);
    };
  }, []);

  const switchToApp = () => {
    console.log('button clicked');
    // console.log('switching to app');
    // window.electron.ipcRenderer.sendMessage('game-to-electron', [
    //   'Hi from game',
    // ]);
  };

  return (
    <div id="phaser-container">
      <button
        onClick={() => {
          navigate('/');
        }}
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '17px',
          color: 'red',
          fontSize: '48px',
          fontWeight: '900',
          cursor: 'pointer',
          fontFamily: 'cursive',
          textDecoration: 'none',
          outline: 'none',
          border: 'none',
          background: 'transparent',
        }}
      >
        x
      </button>
    </div>
  );
}
