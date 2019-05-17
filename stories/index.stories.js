/* eslint-disable import/no-extraneous-dependencies */
import React  from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from '../src/components/App/Card/Card';
import CardReadme from '../src/components/App/Card/README.md';
import icon from '../src/components/images/icons/puppets.png';
import gallery4 from '../src/components/images/gallery/4.png';

storiesOf('Card', module)
  .addParameters({
    readme: {
      sidebar: CardReadme,
    },
  })
  .add('semplice', () => (
    <Card
      heading="Quann' Salvatore Conte è turnat', quann' Danielino è muort', iss 'o sapeva."
    />
  ), {
    readme: {
      content: `
# Card semplice
usa la \`props\` \`heading\` per modificare il testo principale della Card
<!-- STORY -->
      `,
    },
  })
  .add('con background custom', () => (
    <div style={{ display: 'flex' }}>
      <Card
        backgroundText="05"
        heading="Quann' Salvatore Conte è turnat', quann' Danielino è muort', iss 'o sapeva."
      />
      <div style={{ padding: '10px' }} />
      <Card
        backgroundText="🐱"
        heading="Addirittura con le emoji"
      />
    </div>
  ), {
    readme: {
      content: `
# Testo del background modificabile
* usa la \`props\` \`backgroundText\` per  modificare il testo del background, qualsiasi testo può essere utilizzato
anche una emoji 🐱
<!-- STORY -->
      `,
    },
  })
  .add('completa non espandibile', () => (
    <Card
      backgroundText="01"
      icon={icon}
      heading="Quann' tu me purtast' a spara' chillu cristian' p'a prima vota."
      subHeading="Sapeva pure ca oggi je e te stevema inda 'sta machina"
    />
  ), {
    readme: {
      content: `
# Completa non espandibile
* usa la \`props\` \`icon\` per impostare l'icona della Card
* usa la \`props\` \`subHeading\` per impostare un testo secondario

<!-- STORY -->
      `,
    },
  })
  .add('espandibile', () => (
    <div style={{ float: 'right' }}>
      <Card
        backgroundText="01"
        icon={icon}
        heading="Quann' tu me purtast' a spara' chillu cristian' p'a prima vota."
        subHeading="Sapeva pure ca oggi je e te stevema inda 'sta machina"
        pictures={[
          gallery4,
          gallery4,
          gallery4,
          gallery4,
          gallery4,
        ]}
        enableExpand
        expandButtonText="Clicca qui"
        onExpand={action('expand')}
        onExpanded={action('expanded')}
      />
    </div>
  ), {
    readme: {
      content: `
# Espandibile
* usa la \`props\` \`enableExpand\` per abilitare il button per espandere la Card
* usa la \`props\` \`expandButtonText\` per modificare il testo del bottone
* usa la \`props\` \`onExpand\` per essere notificati dell'inizio dell'espansione della Card
* usa la \`props\` \`onExpanded\` per essere notificati dell'avvenuta espansione della Card

<!-- STORY -->

      `,
    },
  });
