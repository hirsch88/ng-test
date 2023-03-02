import {
  BalCoreModule,
  BalHeadingModule,
} from '@baloise/design-system-components-angular';
import { HelloComponent } from 'src/app/hello/hello.component';

describe('hello.component.cy.ts', () => {
  it('playground', () => {
    cy.mount(HelloComponent, {
      imports: [BalCoreModule.forRoot(), BalHeadingModule],
    });

    cy.waitForDesignSystem()

    cy.get('bal-heading').contains('Component Title')
  });
});
