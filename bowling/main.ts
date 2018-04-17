/**
 * Game
 * Frame
 *  - strikeFrame
 *  - spareFrame
 *  - openFrame
 *  - LastFrame
 * Roll
 *  - strike
 *  - spare
 *  - hit
 *  - gutter
 * Pin
 */

interface Frame {}

interface Player {
  name: string
  roll(pins: BowlingPins): void
}

interface Pins {
  MIN: 0
  MAX: 10
  _left: number
}

class BowlingPins implements Pins {
  public MIN: 0
  public MAX: 10
  public _left: number

  constructor() {
    this.MIN = 0
    this.MAX = 10
    this._left = 0
  }

  get leftPins() {
    return this._left
  }

  set leftPins(droppedPins: number) {
    this._left = this.leftPins
      ? this.leftPins - droppedPins
      : this.MAX - droppedPins
  }
}

class BowlingPlayer implements Player {
  constructor(public name: string) {}
  
  roll(pins: BowlingPins): void {
    pins.leftPins = BowlingPlayer.randomRoll(pins.leftPins || pins.MAX, 0.8)
    console.log(`Left Pins: ${pins.leftPins}`)
  }

  public static randomRoll(maxPins: number, biasRatio: number): number {
    const bias: number = Math.ceil(maxPins * biasRatio)
    const influence: number = Math.round(Math.random())
    const mix: number = Math.random() * influence
    const rand: number = Math.ceil(Math.random() * maxPins)
    const dropped: number = rand * (1 - mix) + bias * mix
    return Math.ceil(dropped)
  }
}

class BowlingGame {
  constructor(public player, public initPins: BowlingPins) {}
  

}

const p1 = new BowlingPlayer('Kyoong')
const testPins = new BowlingPins()
p1.roll(testPins)
p1.roll(testPins)


/**
 * 플레이어는 공을 굴린다
 * 플레이어는 점수를 가진다
 * 플레이어는 승/패를 가진다
 *
 * 게임은 10개의 프레임을 가진다
 * 게임은 N명의 플레이어를 가진다
 *
 * 점수판은 점수를 계산하는 기능이 있다
 * 점수판은 플레이어가 공을 굴리면 그에 대한 정보를 가져와 점수를 계산한다
 * 점수판의 점수는 플레이어가 매 판 공을 굴릴때마다 변경되어야 한다
 *
 * 프레임은 최대 2번의 공을 굴릴 기회를 가진다
 * 프레임은 open, spare, strike 의 프레임 상태를 가진다
 *
 * 게임을 시작한다
 * 1. 플레이어를 등록한다
 * 2. 점수판을 생성한다
 * 3. 플레이어가 공을 굴린다
 * 4. 공을 굴린 기록이 점수판으로 전달된다
 * 5. 점수판에 내용을 표시한다
 * 6.
 *
 */

/**
 * 프레임과 플레이어의 상관관계?
 * 게임 > 플레이어 > 프레임 > 핀
 * 플레이어에게 어떻게 새 프레임을 주입하지?
 * 게임 has 플레이어, 게임 has 프레임, 게임 has 볼링핀, 게임 has 점수판
 */

/**
 * 
 */