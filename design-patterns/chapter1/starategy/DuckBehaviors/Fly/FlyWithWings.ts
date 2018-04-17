import { Fly } from './Fly'

class FlyWithWings implements Fly {
  /**
   * @override
   * fly: 날개로 날 수 있음
   */
  public fly() {
    console.log('날개로 날 수 있어요!')
  }
}

export {
  FlyWithWings
}