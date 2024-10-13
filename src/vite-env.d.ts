/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHOW_DEBUG: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
