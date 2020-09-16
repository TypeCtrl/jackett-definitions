import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'onlineselfeducation',
  name: 'OnlineSelfEducation',
  description: 'OnlineSelfEducation is a Private Torrent Tracker for E-LEARNING',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://onlineselfeducation.com/'],
  caps: {
    categorymappings: [
      { id: '9', cat: 'Other', desc: 'Author: Brian Tracy' },
      { id: '10', cat: 'Other', desc: 'Author: Dan Kennedy' },
      { id: '11', cat: 'Other', desc: 'Author: Dan Pena' },
      { id: '12', cat: 'Other', desc: 'Author: Eben Pagan' },
      { id: '13', cat: 'Other', desc: 'Author: Jay Abraham' },
      { id: '14', cat: 'Other', desc: 'Author: Jim Rohn' },
      { id: '15', cat: 'Other', desc: 'Author: John Reese' },
      { id: '19', cat: 'Other', desc: 'Author: Others' },
      { id: '16', cat: 'Other', desc: 'Author: Robert Kiyosaki' },
      { id: '17', cat: 'Other', desc: 'Author: T Harv Eker' },
      { id: '18', cat: 'Other', desc: 'Author: Zig Ziglar' },
      { id: '20', cat: 'Other', desc: 'Autobiographies/Biographies' },
      { id: '21', cat: 'Other', desc: 'Ayn Rand/Objectivism' },
      { id: '34', cat: 'Other', desc: 'Biz: Written/E-Books' },
      { id: '3', cat: 'Other', desc: 'Consulting' },
      { id: '1', cat: 'Other', desc: 'Copywriting' },
      { id: '22', cat: 'Other', desc: 'Corporate Design &amp;Branding' },
      { id: '23', cat: 'Other', desc: 'Customer Service' },
      { id: '24', cat: 'Other', desc: 'Economics Finance' },
      { id: '25', cat: 'Other', desc: 'Entertainment Business' },
      { id: '26', cat: 'Other', desc: 'Hypnosis/NLP' },
      { id: '27', cat: 'Other', desc: 'Investing/Trading/Stocks' },
      { id: '28', cat: 'Other', desc: 'Magazines' },
      { id: '29', cat: 'Other', desc: 'Management/Leadership' },
      { id: '30', cat: 'Other', desc: 'Mindset/Achievement' },
      { id: '59', cat: 'Other', desc: 'Misc./Software' },
      { id: '31', cat: 'Other', desc: 'Money Management/Taxes' },
      { id: '33', cat: 'Other', desc: 'Negotiation/Contracts' },
      { id: '35', cat: 'Other', desc: 'Net: Affiliate Schemes' },
      { id: '36', cat: 'Other', desc: 'Net: Blogging' },
      { id: '37', cat: 'Other', desc: 'Net: E-Commerce' },
      { id: '38', cat: 'Other', desc: 'Net: eBay/Online Auctions' },
      { id: '39', cat: 'Other', desc: 'Net: Email Marketing' },
      { id: '40', cat: 'Other', desc: 'Net: Marketing' },
      { id: '41', cat: 'Other', desc: 'Net: Misc' },
      { id: '42', cat: 'Other', desc: 'Net: PPC Advertising' },
      { id: '43', cat: 'Other', desc: 'Net: Search Engine Optimizing' },
      { id: '58', cat: 'Other', desc: 'Net: Social Media' },
      { id: '44', cat: 'Other', desc: 'Net: Traffic Generation' },
      { id: '45', cat: 'Other', desc: 'Net: Web Site/Blog Templates' },
      { id: '46', cat: 'Other', desc: 'Network Marketing (MLM)' },
      { id: '47', cat: 'Other', desc: 'Offshore/Tax Avoidance' },
      { id: '57', cat: 'Other', desc: 'Others: Help Categorize?' },
      { id: '48', cat: 'Other', desc: 'Private Label Rights (PLR)' },
      { id: '49', cat: 'Other', desc: 'Real Estate/Property Develop' },
      { id: '50', cat: 'Other', desc: 'Recruitment/Interviewing' },
      { id: '51', cat: 'Other', desc: 'Sales/Marketing' },
      { id: '61', cat: 'Other', desc: 'Selling Physical Products' },
      { id: '52', cat: 'Other', desc: 'Small Business/Entrepreneurs' },
      { id: '53', cat: 'Other', desc: 'TTC Lectures' },
      { id: '60', cat: 'Other', desc: 'Exclusive Torrents' },
      { id: '62', cat: 'Other', desc: 'Group Buys' },
    ],
    modes: { search: ['q'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '4',
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'table:contains("Login failed!")' }],
    test: {
      path: 'index.php',
      selector: 'a[href*="/logout.php?hash_insert="]',
    },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      searchin: 'title',
      incldead: 1,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.mainouter tbody tr table[width="85%"] > tbody > tr:has(a[href^="download.php?torrent="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(5)' },
      date: {
        selector: 'td:nth-child(7):not(:contains("day"))',
        optional: true,
        filters: [{ name: 'dateparse', args: 'Jan 2 2006 03:04 PM' }],
      },
      size: { selector: 'td:nth-child(8)' },
      grabs: {
        selector: 'td:nth-child(9)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(10)' },
      leechers: { selector: 'td:nth-child(11)' },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
