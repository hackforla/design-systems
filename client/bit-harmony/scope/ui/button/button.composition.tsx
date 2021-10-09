import React from 'react';
import { Button } from './button';

export const PrimaryButton = () => (
  <Button onClick={console.log} children={'Primary'} size={'md'} />
);

export const SecondaryButton = () => (
  <Button
    onClick={console.log}
    variant={'secondary'}
    children={'Secondary'}
    size={'md'}
  />
);

export const SmallButton = () => (
  <Button onClick={console.log} children={'Small'} size={'sm'} />
);

export const MediumButton = () => (
  <Button onClick={console.log} children={'Medium'} size={'md'} />
);

export const LargeButton = () => (
  <Button onClick={console.log} children={'Large'} size={'lg'} />
);

export const PrimaryDisabledButton = () => (
  <Button
    onClick={console.log}
    children={'Primary'}
    size={'md'}
    disabled={true}
  />
);

export const SecondaryDisabledButton = () => (
  <Button
    onClick={console.log}
    variant={'secondary'}
    children={'Secondary'}
    size={'md'}
    disabled={true}
  />
);
