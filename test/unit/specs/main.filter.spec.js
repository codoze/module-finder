import { date } from 'src/main.filter'

describe('main.filter', () => {
  it('parse date correctly', () => {
    expect(date('2015-06-14T03:01:12.653Z')).to.be.equal('14.5.2015')
  })
})
