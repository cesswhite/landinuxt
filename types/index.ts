export type Elements = 'hero' | 'headers' | 'features' | 'footers'

export interface Component {
    name: Elements;
    total: number;
}
