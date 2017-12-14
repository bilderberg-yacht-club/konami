import Konami, { konamiCode } from '../src/konami'
import { isEqual } from 'lodash'

const test = require('tape')

test('Given the key entered is valid, the keyList is updated', (t: any) => {
  let konami = new Konami()

  konami.addAndConfirmKey(38)
  konami.addAndConfirmKey(38)
  konami.addAndConfirmKey(40)
  konami.addAndConfirmKey(40)

  t.ok(isEqual(konami.keyList, [38, 38, 40, 40]))
  t.end()
})

test('Given the key entered is invalid, the keyList is reset', (t: any) => {
  let konami = new Konami()

  konami.addAndConfirmKey(38)
  konami.addAndConfirmKey(38)
  konami.addAndConfirmKey(42)

  t.ok(isEqual(konami.keyList, []))
  t.end()
})

test('Given the full Konami code has been entered, the `onSuccess` function is called', (t: any) => {
  let konami = new Konami()

  konami.onSuccess = () => {
    t.ok(true)
  }

  konamiCode.forEach(key => { konami.addAndConfirmKey(key) })
  t.end()
})

test('Given the full Konami code has not been entered, the `onSuccess` function is not called', (t: any) => {
  let konami = new Konami()

  konami.onSuccess = () => {
    t.ok(false)
  }

  t.ok(true)
  t.end()
})
