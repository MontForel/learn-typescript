import { Fly } from './DuckBehaviors/Fly'
import { Quack } from './DuckBehaviors/Quack'

interface Duck {
  swim(): void
  display(): void
}

abstract class AbstractBaseDuck implements Duck {
  protected flyBehavior: Fly
  protected quackBehavior: Quack

  abstract swim(): void

  abstract display(): void

  public performFly(): void {
    this.flyBehavior.fly()
  }

  public performQuack(): void {
    this.quackBehavior.quack()
  }
}

export {
  AbstractBaseDuck
}