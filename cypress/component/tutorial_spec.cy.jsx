import { Tutorial1 } from '../../src/components/Tutorial1'
import { Tutorial2 } from '../../src/components/Tutorial2'
import { Tutorial3 } from '../../src/components/Tutorial3'

describe('Mounting tutorials', () => {
  it('successfully mounts tutorial1', () => {
    cy.mount(<Tutorial1/>)
  })

  it('successfully mounts tutorial2', () => {
    cy.mount(<Tutorial2/>)
  })

  it('successfully mounts tutorial3', () => {
    cy.mount(<Tutorial3/>)
  })
})