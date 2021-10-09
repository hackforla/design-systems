import React from 'react';
import classNames from 'classnames';
import styles from './text.module.scss';

export type TextProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export function Text({ text, className }: TextProps) {
  return <p className={classNames(styles.text, text, className)}>{text}</p>;
}
