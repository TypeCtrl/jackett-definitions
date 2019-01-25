export type Filters =
  | ReReplaceFilter
  | ReplaceFilter
  | DateparseFilter
  | QuerystringFilter
  | RegexpFilter
  | TrimFilter
  | TimeagoFilter
  | AppendFilter
  | DateparseFilter
  | DiacriticsFilter
  | PrependFilter
  | ValidfilenameFilter
  | UrlencodeFilter
  | UrldecodeFilter
  | ToupperFilter
  | StrdumpFilter
  | GarbageDateparseFilter
  | SplitFilter;

export interface ReplaceFilter {
  name: 'replace';
  args: [string, string];
}

export interface ReReplaceFilter {
  name: 're_replace';
  args: [string, string];
}

export interface QuerystringFilter {
  name: 'querystring';
  args: string;
}

export interface RegexpFilter {
  name: 'regexp';
  args: string;
}

export interface TrimFilter {
  name: 'trim';
  args?: string;
}

export interface AppendFilter {
  name: 'append';
  args: string;
}

export interface PrependFilter {
  name: 'prepend';
  args: string;
}

export interface DateparseFilter {
  name: 'dateparse';
  args: string;
}

/**
 * garbage from bitme.ts
 */
export interface GarbageDateparseFilter {
  dateparse: null;
  args: string;
}

export interface SplitFilter {
  name: 'split';
  args: [string, number | string];
}

export interface TimeagoFilter {
  name: 'timeago';
}

export interface ValidfilenameFilter {
  name: 'validfilename';
}

export interface ToupperFilter {
  name: 'toupper';
}

export interface UrlencodeFilter {
  name: 'urlencode';
}

export interface UrldecodeFilter {
  name: 'urldecode';
}

export interface DiacriticsFilter {
  name: 'diacritics';
  args: string;
}

export interface StrdumpFilter {
  name: 'strdump';
}
