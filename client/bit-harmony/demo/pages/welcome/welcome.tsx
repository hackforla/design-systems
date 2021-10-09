import React from 'react';
import { Card } from '@company/scope.ui.card';
import { Heading } from '@company/scope.ui.heading';
import { Text } from '@company/scope.ui.text';
import styles from './welcome.module.scss';

export function Welcome() {
  return (
    <div className={styles.page}>
      <Heading className={styles.h1}>Welcome to Bit</Heading>
      <Text
        className={styles.texts}
        text="Edit this component and see it change in the UI or play with the commands below to learn more about how Bit works."
      />
      <div className={styles.grid}>
        <Card
          link="https://harmony-docs.bit.dev/getting-started/installing-bit"
          heading="Docs"
          text="see more from the docs"
        />

        <Card
          link="https://bit.dev/learn-bit-react"
          heading="Demos"
          text="see more from our demo projects"
        />
        <Card
          link="https://github.com/teambit/bit/discussions/4707"
          heading="Self Host"
          text="lean how to self host these components"
        />
        <Card
          link="https://harmony-docs.bit.dev/getting-started/remote-scope"
          heading="Bit Cloud"
          text="lean how to publish to the Bit cloud"
        />
      </div>

      <Heading element="h2" className={styles.h2}>
        Bit CLI
      </Heading>
      <Text className={styles.texts} text="Understanding Bit's Commands" />

      <div className={styles.grid}>
        <Card
          link="https://harmony-docs.bit.dev/aspects/generator"
          heading="Templates"
          text="see a list of available templates"
          command="bit templates"
        />
        <Card
          link="https://harmony-docs.bit.dev/building-with-bit/creating-components"
          heading="Create"
          text="create your own components"
          command="bit create react ui/button"
        />
        <Card
          link="https://harmony-docs.bit.dev/building-with-bit/consuming-components"
          heading="Install"
          text="install components from elsewhere"
          command="bit install @teambit/design.templates.ui.external-link"
        />
        <Card
          link="https://harmony-docs.bit.dev/building-with-bit/consuming-components#import-components"
          heading="Import"
          text="import components into your workspace"
          command="bit import @teambit/documenter.theme.theme-compositions"
        />
        <Card
          link="https://harmony-docs.bit.dev/building-with-bit/versioning-components"
          heading="Tag"
          text="create a version of your components"
          command={`bit tag --all --message "first version"`}
        />
        {/* <Card
          link=""
          heading="Snap"
          text="snap your components"
          command="bit snap --all"
        /> */}
        <Card
          link="https://harmony-docs.bit.dev/building-with-bit/exporting-components"
          heading="Export"
          text="export your components"
          command="bit export"
        />
        <Card
          link="https://harmony-docs.bit.dev/building-with-bit/removing-components"
          heading="Remove"
          text="remove components and their files"
          command={`bit remove "ui/*" --delete-files`}
        />
      </div>
    </div>
  );
}
