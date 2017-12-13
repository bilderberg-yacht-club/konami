import isEqual = require('lodash/isEqual')

export const konamiCode: number[] = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]

export interface Konami {
  onSuccess: any
  keyList: number[]
  addAndConfirmKey: any[number]
}

export default class implements Konami {
  /*
   * up     = 38
   * right  = 39
   * down   = 40
   * left   = 37
   * a      = 65
   * b      = 66
   * enter  = 13
  */

  public onSuccess: any
  public keyList: number[] = []

  public constructor () {
    document.addEventListener('keyup', (e: KeyboardEvent):void => {
      this.addAndConfirmKey(e.keyCode)
    })
  }

  /**
   * Check the key against the KonamiCode at a given index. If the key
   * matches append it to the keyList, if not clear the keyList of all
   * previous values.
   *
   * If the full code is entered the onsuccess function will be called.
   * onsuccess should be set after the konami object has been instatntiated.
   *
   * # Example
   *
   * let konami = new Konami()
   * konami.onsuccess = () => { // do something cool }
   *
   * @param key number
   * @returns undefined
  */
  public addAndConfirmKey(key: number): void{
    konamiCode[this.keyList.length] === key
    ? this.keyList.push(key)
    : this.keyList = []

    if (isEqual(this.keyList, konamiCode)) this.onSuccess()
  }
}
