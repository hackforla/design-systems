import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Theme } from '@teambit/react.templates.themes.theme';
import { MyReactAspect } from './my-react.aspect';

export class MyReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const myReactPreviewMain = new MyReactPreviewMain();
    // register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([ThemeCompositions, Theme]);

    return myReactPreviewMain;
  }
}

MyReactAspect.addRuntime(MyReactPreviewMain);
