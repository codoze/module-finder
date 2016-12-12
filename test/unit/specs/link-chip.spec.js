// import Vue from 'vue'
import LinkChip from 'src/components/shared/link-chip'

import { getRenderedText } from '../helpers'

describe('link-chip.vue', () => {
  it('render href correctly', () => {
    expect(getRenderedText({
      component: LinkChip,
      selector: null,
      propsData: {
        href: 'http://www.google.com',
        text: 'google'
      },
      attribute: 'href'
    })).to.equal('http://www.google.com')
  })

  it('render text correctly', () => {
    expect(getRenderedText({
      component: LinkChip,
      selector: '.link-chip--text',
      propsData: {
        href: 'http://www.google.com',
        text: 'google'
      }
    })).to.equal('google')
  })
})
