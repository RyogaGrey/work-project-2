import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        linksAndButtons: Palette['primary'];
    }

    interface PaletteOptions {
        linksAndButtons?: PaletteOptions['primary'];
    }
}