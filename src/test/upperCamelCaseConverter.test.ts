import { upperCamelCaseConverter } from "../core/upperCamelCaseConverter"

describe('UpperCamelCaseConverter', () => {
  it('Allows empty text', () => {
    expect(upperCamelCaseConverter("")).toBe("")
  })

  it('Allows capialized word', () => {
    expect(upperCamelCaseConverter("Foo")).toBe("Foo")
  })

  it('Join the capitalized words that are separated by spaces', () => {
    expect(upperCamelCaseConverter("Foo Bar")).toBe("FooBar")
  })

  it('Join the capitalized wordss that are separated by hyphens', () => {
    expect(upperCamelCaseConverter("Foo_Bar-Foo")).toBe("FooBarFoo")
  })

  it('converts the firstLetter of one word to UpperCase', () => {
    expect(upperCamelCaseConverter("foo")).toBe("Foo")
  })

  it('converts the firstLetter of each word to UpperCase', () => {
    expect(upperCamelCaseConverter("foo_bar-foo")).toBe("FooBarFoo")
  })
})