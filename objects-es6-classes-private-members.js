const _price_usd = Symbol()
const _insert_to_db = Symbol()

class Course {
  constructor(url, author, title, price_usd) {
    this.url = url
    this.author = author
    this.title = title
    this[_price_usd] = price_usd
  }

    getPrice(currency) {
      if (currency != "usd" && currency != "real") {
        throw "Currency must be either 'usd' or 'real'"
      }

      if (currency === "usd") {
        return this[_price_usd]
      } else {
        const usdToRealRate = 5.32
        return this[_price_usd] * usdToRealRate
      }
    }
    
    test() {
      return this[_insert_to_db]()
    }

    [_insert_to_db]() {
      console.log("Course has been inserted to the db")
    }
}

const course = new Course('www.google.com', 'Mosh', 'Node', 10)
