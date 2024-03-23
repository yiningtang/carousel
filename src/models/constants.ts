export const BG_COLOUR = `black`;
export const FONT_COLOUR = `#828282`;
export const WHITE = `white`;
export const ITEM_ON_FOCUS = `#4a9ecf`;
export const NAV_MENU_OPTIONS = [
  { id: `01`, value: `home`, displayName: `Home`, path: `/` },
  { id: `02`, value: `TV_shows`, displayName: `TV Shows`, path: `/#` },
  { id: `03`, value: `movies`, displayName: `Movies`, path: `/#`},
];

export enum LoadingStatus {
  Idle = 'idle',
  Loading = 'loading',
  Completed = 'completed',
  Failed = 'failed'
}
