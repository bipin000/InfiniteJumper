import Phaser from "../phaser.js"
export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture)
    this.setScale(0.5)
  }
}