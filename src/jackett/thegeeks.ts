import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'thegeeks',
  name: 'The Geeks',
  description: 'Technology E-Learning',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://thegeeks.click/'],
  caps: {
    categorymappings: [
      { id: '212', cat: 'Other', desc: 'AudioBook : Fiction' },
      { id: '56', cat: 'Other', desc: 'Docu : History - War/Politics' },
      { id: '209', cat: 'Other', desc: 'Business : Startup/Dev' },
      { id: '9', cat: 'Other', desc: 'Food/Cooking/Nutrition' },
      { id: '45', cat: 'Other', desc: 'Photography' },
      { id: '213', cat: 'Other', desc: 'AudioBook : Non-Fiction' },
      { id: '35', cat: 'Other', desc: 'Docu : Home / Property' },
      { id: '28', cat: 'Other', desc: 'Business :Misc' },
      { id: '37', cat: 'Other', desc: 'Game Shows / Quiz Shows' },
      { id: '11', cat: 'Other', desc: 'Political Studies' },
      { id: '71', cat: 'Other', desc: 'Docu : Antiques / Collecting' },
      { id: '78', cat: 'Other', desc: 'Docu : Horizon' },
      { id: '40', cat: 'Other', desc: 'Comp: Certification Courses' },
      { id: '2', cat: 'Other', desc: 'Games: Cards/Tabletop/etc' },
      { id: '61', cat: 'Other', desc: 'Science: Biology' },
      { id: '82', cat: 'Other', desc: 'Docu : Architecture/Building' },
      { id: '69', cat: 'Other', desc: 'Docu : Misc' },
      { id: '44', cat: 'Other', desc: 'Comp: Digital Audio/Video' },
      { id: '23', cat: 'Other', desc: 'Hobbies: Misc' },
      { id: '77', cat: 'Other', desc: 'Science: Chemistry' },
      { id: '72', cat: 'Other', desc: 'Docu : Astronomy / Space' },
      { id: '75', cat: 'Other', desc: 'Docu : Nature' },
      { id: '48', cat: 'Other', desc: 'Comp: Games Dev/Guides' },
      { id: '1', cat: 'Other', desc: 'Languages / Linguistics' },
      { id: '12', cat: 'Other', desc: 'Science: Math/Statistics' },
      { id: '85', cat: 'Other', desc: 'Docu : Childrens Ed' },
      { id: '54', cat: 'Other', desc: 'Docu : News/World Reports' },
      { id: '3', cat: 'Other', desc: 'Comp: Graphics ' },
      { id: '20', cat: 'Other', desc: 'Law & Justice' },
      { id: '10', cat: 'Other', desc: 'Science: Medicine/Health ' },
      { id: '38', cat: 'Other', desc: 'Docu : Crime/ Investigation' },
      { id: '83', cat: 'Other', desc: 'Docu : Nova' },
      { id: '42', cat: 'Other', desc: 'Comp: Lang/DBs' },
      { id: '30', cat: 'Other', desc: 'Literature' },
      { id: '29', cat: 'Other', desc: 'Science: Philosophy' },
      { id: '59', cat: 'Other', desc: 'Docu : Earth / Environment' },
      { id: '27', cat: 'Other', desc: 'Docu : Paleontology' },
      { id: '49', cat: 'Other', desc: 'Comp: Network/Hardware' },
      { id: '16', cat: 'Other', desc: 'Magic & Illusion' },
      { id: '76', cat: 'Other', desc: 'Science: Physics' },
      { id: '18', cat: 'Other', desc: 'Docu : Engineering' },
      { id: '67', cat: 'Other', desc: 'Docu : Pets/Animal Keeping' },
      { id: '43', cat: 'Other', desc: 'Comp: Operating Systems' },
      { id: '26', cat: 'Other', desc: 'Music: History / Theory' },
      { id: '14', cat: 'Other', desc: 'Science: Psych/Sociolgy' },
      { id: '4', cat: 'Other', desc: 'Docu : Fine/Visual Arts' },
      { id: '53', cat: 'Other', desc: 'Docu : Social Experiment' },
      { id: '46', cat: 'Other', desc: 'Comp: Security/Encryption' },
      { id: '15', cat: 'Other', desc: 'Music: Learning / Courses' },
      { id: '80', cat: 'Other', desc: 'Sports - Live/Highlights' },
      { id: '39', cat: 'Other', desc: 'Docu : Fly on The Wall' },
      { id: '73', cat: 'Other', desc: 'Docu : Survivalism' },
      { id: '52', cat: 'Other', desc: 'Comp: Software Training' },
      { id: '206', cat: 'Other', desc: 'Native American Studies' },
      { id: '22', cat: 'Other', desc: 'Sports/Exercise/Outdoors' },
      { id: '84', cat: 'Other', desc: 'Docu : FrontLine' },
      { id: '32', cat: 'Other', desc: 'Docu : Travel / Culture' },
      { id: '41', cat: 'Other', desc: 'Comp: Theory/Ref/Mags' },
      { id: '201', cat: 'Other', desc: 'Occultism: Academic / Referenc' },
      { id: '24', cat: 'Other', desc: 'Stock Media' },
      { id: '36', cat: 'Other', desc: 'Docu : Gardening/Agriculture' },
      { id: '34', cat: 'Other', desc: 'Docu : Vehicles/Transport' },
      { id: '47', cat: 'Other', desc: 'Comp: Web Development' },
      { id: '202', cat: 'Other', desc: 'Occultism: Mythology Folklore' },
      { id: '33', cat: 'Other', desc: 'Style & Fashion' },
      { id: '58', cat: 'Other', desc: 'Docu : History - Biographies' },
      { id: '207', cat: 'Other', desc: 'Business : Economics' },
      { id: '68', cat: 'Other', desc: 'Crafts/Jewelry' },
      { id: '203', cat: 'Other', desc: 'Paranormal' },
      { id: '210', cat: 'Other', desc: 'Tattoos/Body Art' },
      { id: '55', cat: 'Other', desc: 'Docu : History - Civilization' },
      { id: '211', cat: 'Other', desc: 'Business : Investing' },
      { id: '21', cat: 'Other', desc: 'DIY / Workshop' },
      { id: '204', cat: 'Other', desc: 'Parapsychology' },
      { id: '31', cat: 'Other', desc: 'Docu : History - Misc' },
      { id: '208', cat: 'Other', desc: 'Business : Marketing' },
      { id: '25', cat: 'Other', desc: 'Exam Prep / Education' },
      { id: '60', cat: 'Other', desc: 'Performing Arts' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    captcha: { type: 'image', selector: 'img#freecap', input: 'word' },
    error: [{ selector: 'table:contains("Login failed!")' }],
    test: { path: 'main.php' },
  },
  download: { selector: 'a[href^="download.php"]' },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
    },
    rows: {
      selector: 'table[border="0"] > tbody > tr.ttable:has(a[href^="browse.php?cat="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { filters: null, selector: 'td:nth-child(2) b' },
      download: {
        selector: 'a[href^="download.php/"]',
        attribute: 'href',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      files: { selector: 'td:nth-child(4)' },
      size: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      date: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'regexp', args: '(\\d{4}-\\d{2}-\\d{2})' }],
      },
      downloadvolumefactor: {
        case: {
          'font[color="green"]': '0',
          'font[color="blue"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: { 'font[color="green"]': '0', '*': '1' },
      },
    },
  },
  source: 'jackett',
};
