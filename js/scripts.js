/**
 * ============================================================================
 * Tarteaucitron
 * ============================================================================
 */

const googleIdentifier = 'UA-165370632-1';

/**
 * See https://github.com/AmauriC/tarteaucitron.js/
 */
// eslint-disable-next-line no-undef
tarteaucitron.init({
  /* Privacy policy url */
  privacyUrl: '',

  /* Open the panel with this hashtag */
  hashtag: '#tarteaucitron',
  /* Cookie name */
  cookieName: 'tarteaucitron',

  /* Banner position (top - bottom - middle - popup) */
  orientation: 'bottom',

  /* Group services by category */
  groupServices: false,

  /* Show the small banner on bottom right */
  showAlertSmall: false,
  /* Show the cookie list */
  cookieslist: true,

  /* Show cookie icon to manage cookies */
  showIcon: false,

  /* Optionnal: URL or base64 encoded image */
  // "iconSrc": "",

  /*
   * Position of the icon between BottomRight, BottomLeft, TopRight and TopLeft
   */
  iconPosition: 'BottomRight',

  /* Show a Warning if an adblocker is detected */
  adblocker: true,

  /* Show the deny all button */
  DenyAllCta: true,
  /* Show the accept all button when highPrivacy on */
  AcceptAllCta: true,
  /* HIGHLY RECOMMANDED Disable auto consent */
  highPrivacy: true,

  /* If Do Not Track == 1, disallow all */
  handleBrowserDNTRequest: false,

  /* Remove credit link */
  removeCredit: true,
  /* Show more info link */
  moreInfoLink: true,
  /* If false, the tarteaucitron.css file will be loaded */
  useExternalCss: false,

  /* Shared cookie for subdomain website */
  // "cookieDomain": ".my-multisite-domaine.fr",

  /* Change the default readmore link pointing to tarteaucitron.io */
  readmoreLink: '',

  /* Show a message about mandatory cookies */
  mandatory: true,
});

/**
 * If we use Google Analytics (and not Google Manager) with
 * tarteaucitron.user.analyticsAnonymizeIp` set to true, it is not blocked by
 * uBlock
 */
// eslint-disable-next-line no-undef
(tarteaucitron.job = tarteaucitron.job || []).push('gtag');
tarteaucitron.user.gtagUa = googleIdentifier;
