import { QuackInterface } from "./QuackInterface";

class Quack implements QuackInterface {
  public quack() {
    console.log('꽤-액!')
  }
}

export { Quack }