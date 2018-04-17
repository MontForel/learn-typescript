import { AbstractBaseDuck } from './Duck'
import { FlyWithWings } from './DuckBehaviors/Fly'
import { Quack } from './DuckBehaviors/Quack'

class MallardDuck extends AbstractBaseDuck {
  public flyBehavior: FlyWithWings
  public quackBehavior: Quack

  constructor() {
    super()
    this.flyBehavior = new FlyWithWings()
    this.quackBehavior = new Quack()
  }

  public swim(): void {
    console.log('청둥오리 수영중!')
  }

  public display(): void {
    console.log('저는 청둥오리에요!')
  }
}

export { MallardDuck }
