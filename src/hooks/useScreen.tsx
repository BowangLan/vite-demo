import React from 'react'
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig)

export default function useScreen() {
  if (screen.width < fullConfig.theme.screens.sm) {
    return 'sm'
  } else if (screen.width < fullConfig.theme.screens.md) {
    return 'md'
  } else if (screen.width < fullConfig.theme.screens.lg) {
    return 'lg'
  } else if (screen.width < fullConfig.theme.screens.xl) {
    return 'xl'
  }
}
