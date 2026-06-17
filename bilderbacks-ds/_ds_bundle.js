/* @ds-bundle: {"format":3,"namespace":"TheBilderbacksDesignSystem_a2147b","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ScriptureBlock","sourcePath":"components/core/ScriptureBlock.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"6e252f7f8495","components/core/Badge.jsx":"01e0ff4168e9","components/core/Button.jsx":"1f7965d32bf4","components/core/Card.jsx":"a3ab03e2304c","components/core/Input.jsx":"208bc29dbbcd","components/core/ScriptureBlock.jsx":"1bc4b8804654","components/core/SectionHeading.jsx":"acc3d9cf4283","ui_kits/website/AboutScreen.jsx":"1e5fad108f79","ui_kits/website/Footer.jsx":"8d4607675777","ui_kits/website/Header.jsx":"9a87e044acbb","ui_kits/website/HomeScreen.jsx":"51189c444cbd","ui_kits/website/MusicScreen.jsx":"29cb973fc523","ui_kits/website/TourScreen.jsx":"be2cfb6f82fb","ui_kits/website/bits.jsx":"dcbbba6cd7fb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheBilderbacksDesignSystem_a2147b = window.TheBilderbacksDesignSystem_a2147b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Bilderbacks — Avatar
 * Circular portrait with warm ring. Falls back to initials on a tinted bg.
 */
function Avatar({
  src,
  name = '',
  size = 56,
  ring = true,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const base = {
    width: size,
    height: size,
    borderRadius: '50%',
    flex: 'none',
    objectFit: 'cover',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--oat-200)',
    color: 'var(--walnut-700)',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-medium)',
    fontSize: size * 0.38,
    boxShadow: ring ? '0 0 0 2px var(--cream-50), 0 0 0 3.5px var(--rust-400)' : 'none',
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: name,
      style: base
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base,
    "aria-label": name
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Bilderbacks — Badge
 * Small status / category pill. Tones map to the brand palette.
 */
function Badge({
  children,
  tone = 'rust',
  solid = false,
  style = {},
  ...rest
}) {
  const tones = {
    rust: {
      fg: 'var(--rust-700)',
      bg: 'var(--rust-100)',
      solidBg: 'var(--rust-500)'
    },
    denim: {
      fg: 'var(--denim-700)',
      bg: 'var(--denim-100)',
      solidBg: 'var(--denim-500)'
    },
    gold: {
      fg: 'var(--gold-600)',
      bg: 'var(--gold-100)',
      solidBg: 'var(--gold-500)'
    },
    walnut: {
      fg: 'var(--walnut-700)',
      bg: 'var(--oat-200)',
      solidBg: 'var(--walnut-700)'
    },
    success: {
      fg: '#3F5733',
      bg: '#E2EAD9',
      solidBg: 'var(--success)'
    }
  };
  const t = tones[tone] || tones.rust;
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-1)',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '0.04em',
    lineHeight: 1,
    padding: '5px 10px',
    borderRadius: 'var(--radius-pill)',
    color: solid ? 'var(--cream-50)' : t.fg,
    background: solid ? t.solidBg : t.bg,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Bilderbacks — Button
 * Pill-shaped, warm. Variants: primary (rust), secondary (denim),
 * outline, ghost. Sizes: sm / md / lg.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '12px 24px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '16px 32px',
      fontSize: 'var(--text-md)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--primary)',
      color: 'var(--on-primary)',
      border: '1.5px solid transparent'
    },
    secondary: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      border: '1.5px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--walnut-900)',
      border: '1.5px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--primary)',
      border: '1.5px solid transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverBg = {
    primary: 'var(--primary-hover)',
    secondary: 'var(--accent-hover)',
    outline: 'var(--cream-100)',
    ghost: 'var(--rust-100)'
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    transform: press && !disabled ? 'scale(0.98)' : 'scale(1)',
    boxShadow: variant === 'primary' && hover && !disabled ? 'var(--shadow-md)' : 'none',
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? {
      background: hoverBg[variant]
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Bilderbacks — Card
 * Matte photo-print surface: white, warm hairline border, soft shadow,
 * large radius. Optional hover lift for interactive cards.
 */
function Card({
  children,
  interactive = false,
  padding = 'var(--space-5)',
  tone = 'light',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    light: {
      background: 'var(--surface-card)',
      color: 'var(--text)',
      border: '1px solid var(--border)'
    },
    dark: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--border-on-dark)'
    },
    cream: {
      background: 'var(--cream-100)',
      color: 'var(--text)',
      border: '1px solid var(--border)'
    }
  };
  const s = {
    borderRadius: 'var(--radius-lg)',
    padding,
    boxShadow: hover && interactive ? 'var(--shadow-lg)' : 'var(--shadow-md)',
    transform: hover && interactive ? 'translateY(-2px)' : 'translateY(0)',
    transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
    cursor: interactive ? 'pointer' : 'default',
    ...tones[tone],
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: s,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Bilderbacks — Input
 * Warm text field with label + optional hint/error. Rounded, hairline border,
 * rust focus ring.
 */
function Input({
  label,
  hint,
  error,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const field = {
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-base)',
    color: 'var(--text)',
    background: 'var(--surface-card)',
    padding: '12px 16px',
    borderRadius: 'var(--radius-md)',
    border: `1.5px solid ${error ? 'var(--danger)' : focus ? 'var(--primary)' : 'var(--border-strong)'}`,
    boxShadow: focus ? '0 0 0 4px var(--rust-100)' : 'none',
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--walnut-700)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ScriptureBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Bilderbacks — ScriptureBlock
 * Italic-serif verse with a tracked uppercase reference label.
 * Optional left rule or centered presentation.
 */
function ScriptureBlock({
  verse,
  reference,
  align = 'left',
  size = 'md',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 'var(--text-md)',
    md: 'var(--text-lg)',
    lg: 'var(--text-2xl)'
  };
  const wrap = {
    textAlign: align,
    borderLeft: align === 'left' ? '2px solid var(--gold-500)' : 'none',
    paddingLeft: align === 'left' ? 'var(--space-5)' : 0,
    maxWidth: '40ch',
    marginInline: align === 'center' ? 'auto' : undefined,
    ...style
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      ...wrap
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 'var(--fw-regular)',
      fontSize: sizes[size],
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--walnut-700)',
      margin: 0
    }
  }, verse || children), reference && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--scripture)'
    }
  }, reference)));
}
Object.assign(__ds_scope, { ScriptureBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ScriptureBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Bilderbacks — SectionHeading
 * Eyebrow label + display-serif title + optional supporting line.
 * The standard way to open a section across the site and flyers.
 */
function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  onDark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? '52ch' : '40ch',
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--gold-400)' : 'var(--primary)',
      marginBottom: 'var(--space-3)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--text-2xl)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      color: onDark ? 'var(--cream-50)' : 'var(--text)',
      margin: 0,
      textWrap: 'balance'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-normal)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      margin: 'var(--space-4) 0 0',
      textWrap: 'pretty'
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
// About screen — story, family members, scripture
function AboutScreen({
  onNav
}) {
  const NS = window.TheBilderbacksDesignSystem_a2147b;
  const {
    Button,
    Card,
    Avatar,
    ScriptureBlock,
    SectionHeading
  } = NS;
  const family = [{
    name: 'Euel Bilderback',
    role: 'Vocals · Founder'
  }, {
    name: 'Marsha Bilderback',
    role: 'Vocals · Founder'
  }, {
    name: 'Blake Bilderback',
    role: 'Vocals'
  }, {
    name: 'Quincie Bilderback',
    role: 'Vocals'
  }, {
    name: 'Cortni Bilderback',
    role: 'Vocals'
  }, {
    name: 'Caleb Bilderback',
    role: 'Vocals'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our family",
    title: "It started around a piano at home. It still does."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--walnut-700)',
      lineHeight: 1.7,
      marginTop: 24
    }
  }, "The Bilderbacks are a Southern Gospel family ministry from Springdale, Arkansas. For more than 29 years \u2014 since 1997 \u2014 Euel and Marsha and their family have shared the Gospel of Jesus through music, one gathering at a time."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--walnut-700)',
      lineHeight: 1.7
    }
  }, "We sing in churches, at revivals, and at festivals \u2014 anywhere folks will gather. The songs change; the heart behind them doesn't. We mean every word."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav('tour')
  }, "Come sing with us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/family-kids.jpg",
    alt: "The Bilderback family",
    style: {
      width: '100%',
      height: 460,
      objectFit: 'cover',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(ScriptureBlock, {
    align: "center",
    size: "lg",
    verse: "Sing unto him a new song; play skilfully with a loud noise.",
    reference: "Psalm 33:3"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "The voices",
    title: "Who you'll hear"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      marginTop: 'var(--space-8)'
    }
  }, family.map((m, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: m.name,
    size: 84
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      margin: '0 0 4px'
    }
  }, m.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, m.role))))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// The Bilderbacks — site Footer with newsletter + socials
const TBBf = () => window.TheBilderbacksDesignSystem_a2147b;
function Footer({
  onNav
}) {
  const {
    Button,
    Input
  } = TBBf();
  const [sent, setSent] = React.useState(false);
  const socials = ['Facebook', 'Apple Music', 'YouTube', 'Instagram'];
  return /*#__PURE__*/React.createElement("footer", {
    className: "tbb-surface-dark",
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--gutter) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 12
    }
  }, "Stay in the loop"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 34,
      color: 'var(--cream-50)',
      margin: '0 0 8px',
      maxWidth: '16ch'
    }
  }, "Know when we're singing near you."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-muted)',
      maxWidth: '40ch',
      marginBottom: 20
    }
  }, "Tour news and new music, a few times a year. Nothing more."), sent ? /*#__PURE__*/React.createElement("p", {
    className: "tbb-script",
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 30,
      color: 'var(--gold-400)'
    }
  }, "Thank you \u2014 talk soon!") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      gap: 12,
      maxWidth: 460,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "",
    placeholder: "you@example.com",
    type: "email"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Sign up"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--walnut-300)',
      marginBottom: 14
    }
  }, "Explore"), ['home', 'music', 'tour', 'about'].map(id => /*#__PURE__*/React.createElement("div", {
    key: id
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--cream-100)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      padding: '6px 0'
    }
  }, {
    home: 'Home',
    music: 'Music',
    tour: 'Events',
    about: 'About'
  }[id])))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--walnut-300)',
      marginBottom: 14
    }
  }, "Listen & follow"), socials.map(s => /*#__PURE__*/React.createElement("div", {
    key: s
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--cream-100)',
      fontSize: 15,
      display: 'inline-block',
      padding: '6px 0'
    }
  }, s)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-on-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      color: 'var(--walnut-300)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " The Bilderbacks \xB7 Springdale, Arkansas \xB7 479-200-3599"), /*#__PURE__*/React.createElement("span", {
    className: "tbb-scripture",
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 15,
      color: 'var(--gold-400)'
    }
  }, "\"Make a joyful noise.\" \u2014 Psalm 100:1"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// The Bilderbacks — site Header (sticky nav)
const TBB = () => window.TheBilderbacksDesignSystem_a2147b;
function Header({
  current,
  onNav
}) {
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'music',
    label: 'Music'
  }, {
    id: 'tour',
    label: 'Tour Dates'
  }, {
    id: 'about',
    label: 'About'
  }];
  const {
    Button
  } = TBB();
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(251,247,240,0.82)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '14px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: '2px solid var(--primary)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: '.02em',
      color: 'var(--walnut-900)'
    }
  }, "TBF"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      letterSpacing: '-0.01em',
      color: 'var(--walnut-900)'
    }
  }, "The Bilderbacks")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onNav(l.id),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: current === l.id ? 700 : 500,
      color: current === l.id ? 'var(--primary)' : 'var(--walnut-700)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)'
    }
  }, l.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNav('tour')
  }, "Bring us to your church")))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Home screen
function HomeScreen({
  onNav
}) {
  const NS = window.TheBilderbacksDesignSystem_a2147b;
  const {
    Button,
    Card,
    Badge,
    ScriptureBlock,
    SectionHeading
  } = NS;
  const {
    AlbumCover
  } = window;
  const dates = [{
    d: 'Jun',
    n: '21',
    venue: 'Grace Fellowship',
    city: 'Springdale, AR',
    tag: 'Free'
  }, {
    d: 'Jul',
    n: '12',
    venue: 'First Baptist',
    city: 'Rogers, AR',
    tag: 'All ages'
  }, {
    d: 'Jul',
    n: '27',
    venue: 'Gospel Sing Night',
    city: 'Branson, MO',
    tag: 'Tickets'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 620,
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/family-kids.jpg",
    alt: "The Bilderback family",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 30%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(43,32,24,0.85) 0%, rgba(43,32,24,0.45) 40%, rgba(43,32,24,0.15) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      width: '100%',
      padding: 'var(--space-10) var(--gutter) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 18
    }
  }, "Southern Gospel \xB7 Springdale, Arkansas"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(44px, 7vw, 88px)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--cream-50)',
      margin: '0 0 20px',
      maxWidth: '14ch'
    }
  }, "One family.", /*#__PURE__*/React.createElement("br", null), "One harmony."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--cream-100)',
      maxWidth: '44ch',
      margin: '0 0 32px'
    }
  }, "A Southern Gospel family ministry, spreading the Gospel of Jesus through music for over 29 years."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNav('music')
  }, "Listen to our music"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => onNav('tour'),
    style: {
      color: 'var(--cream-50)',
      borderColor: 'rgba(251,247,240,0.5)'
    }
  }, "See upcoming events")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(ScriptureBlock, {
    align: "center",
    size: "lg",
    verse: "Oh come, let us sing unto the Lord: let us make a joyful noise to the rock of our salvation.",
    reference: "Psalm 95:1"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(AlbumCover, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The music",
    title: "Full Circle",
    description: "The latest from a family that's been singing together for 29 years \u2014 one of four Southern Gospel albums. Listen wherever you stream."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav('music')
  }, "Play album"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('music')
  }, "View tracklist \u2192"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 36,
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "On the road",
    title: "Where we're singing next"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNav('tour')
  }, "All events")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, dates.map((e, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      flex: 'none',
      background: 'var(--rust-100)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--rust-700)'
    }
  }, e.d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 30,
      lineHeight: 1,
      color: 'var(--walnut-900)'
    }
  }, e.n)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: e.tag === 'Tickets' ? 'denim' : 'success'
  }, e.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 4px',
      fontSize: 20
    }
  }, e.venue), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 15
    }
  }, e.city)))))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MusicScreen.jsx
try { (() => {
// Music screen — featured album with interactive tracklist + streaming links
function MusicScreen({
  onNav
}) {
  const NS = window.TheBilderbacksDesignSystem_a2147b;
  const {
    Button,
    Card,
    Badge,
    SectionHeading
  } = NS;
  const {
    AlbumCover
  } = window;
  const tracks = [{
    n: 1,
    t: 'Full Circle',
    len: '3:42'
  }, {
    n: 2,
    t: 'Homeward Bound',
    len: '4:05'
  }, {
    n: 3,
    t: 'Around the Piano',
    len: '3:18'
  }, {
    n: 4,
    t: 'Every Word',
    len: '3:55'
  }, {
    n: 5,
    t: 'Joyful Noise',
    len: '2:58'
  }, {
    n: 6,
    t: 'Three Generations',
    len: '4:21'
  }, {
    n: 7,
    t: 'Grace Enough',
    len: '3:36'
  }, {
    n: 8,
    t: 'Singing Me Home',
    len: '5:02'
  }];
  const [playing, setPlaying] = React.useState(1);
  const services = ['Apple Music', 'Spotify', 'Amazon Music'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "The music",
    title: "Four albums, one family",
    description: "Our latest, Full Circle \u2014 alongside Our Family Heritage and more. Listen on Apple Music, Spotify, and Amazon Music."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '380px 1fr',
      gap: 'var(--space-9)',
      marginTop: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement(AlbumCover, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "rust"
  }, "Latest album"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      margin: '12px 0 4px'
    }
  }, "Full Circle"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: '0 0 18px'
    }
  }, "Southern Gospel \xB7 The Bilderbacks"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setPlaying(1)
  }, "\u25B6 Play album"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Save")))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-3)"
  }, tracks.map(tr => {
    const active = playing === tr.n;
    return /*#__PURE__*/React.createElement("button", {
      key: tr.n,
      onClick: () => setPlaying(tr.n),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '14px 16px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        background: active ? 'var(--rust-100)' : 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'background 140ms ease'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        flex: 'none',
        textAlign: 'center',
        color: active ? 'var(--rust-600)' : 'var(--text-subtle)',
        fontWeight: 700,
        fontFamily: 'var(--font-sans)'
      }
    }, active ? '▶' : tr.n), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: 'var(--font-sans)',
        fontSize: 17,
        fontWeight: active ? 700 : 500,
        color: active ? 'var(--rust-700)' : 'var(--walnut-900)'
      }
    }, tr.t), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        fontVariantNumeric: 'tabular-nums',
        fontSize: 15
      }
    }, tr.len));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Listen anywhere",
    title: "Find us where you stream"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: 32
    }
  }, services.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 26px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-strong)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--walnut-900)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, "\u266A ", s)))));
}
window.MusicScreen = MusicScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MusicScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TourScreen.jsx
try { (() => {
// Tour screen — date list with RSVP toggle + booking form
function TourScreen({
  onNav
}) {
  const NS = window.TheBilderbacksDesignSystem_a2147b;
  const {
    Button,
    Card,
    Badge,
    Input,
    SectionHeading,
    ScriptureBlock
  } = NS;
  const dates = [{
    mon: 'Jun',
    day: '21',
    dow: 'Sat',
    venue: 'Grace Fellowship Church',
    city: 'Springdale, AR',
    time: '6:00 PM',
    tag: 'Free',
    tone: 'success'
  }, {
    mon: 'Jul',
    day: '12',
    dow: 'Sat',
    venue: 'First Baptist Church',
    city: 'Springdale, AR',
    time: '7:00 PM',
    tag: 'All ages',
    tone: 'walnut'
  }, {
    mon: 'Jul',
    day: '27',
    dow: 'Sun',
    venue: 'Gospel Sing Night',
    city: 'Branson, MO',
    time: '5:30 PM',
    tag: 'Tickets',
    tone: 'denim'
  }, {
    mon: 'Aug',
    day: '09',
    dow: 'Sat',
    venue: 'Ozark Worship Center',
    city: 'Harrison, AR',
    time: '6:30 PM',
    tag: 'Free',
    tone: 'success'
  }, {
    mon: 'Aug',
    day: '24',
    dow: 'Sun',
    venue: 'Cornerstone Chapel',
    city: 'Tulsa, OK',
    time: '6:00 PM',
    tag: 'Tickets',
    tone: 'denim'
  }];
  const [rsvp, setRsvp] = React.useState({});
  const [booked, setBooked] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "On the road",
    title: "Where we're singing",
    description: "Come see us this summer. Pull up a pew \u2014 there's always room for one more."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 'var(--space-8)',
      maxWidth: 880,
      marginInline: 'auto'
    }
  }, dates.map((e, i) => {
    const going = rsvp[i];
    return /*#__PURE__*/React.createElement(Card, {
      key: i,
      padding: "var(--space-4)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        flex: 'none',
        width: 78,
        background: 'var(--cream-100)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: 'var(--rust-600)'
      }
    }, e.mon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 36,
        lineHeight: 1,
        color: 'var(--walnut-900)'
      }
    }, e.day), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, e.dow)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 220
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: e.tone
    }, e.tag)), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 4px',
        fontSize: 22
      }
    }, e.venue), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)',
        fontSize: 15
      }
    }, e.city, " \xB7 ", e.time)), /*#__PURE__*/React.createElement(Button, {
      variant: going ? 'secondary' : 'primary',
      onClick: () => setRsvp(s => ({
        ...s,
        [i]: !s[i]
      }))
    }, going ? '✓ You\u2019re going' : e.tag === 'Tickets' ? 'Get tickets' : 'RSVP')));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true,
    eyebrow: "Invitations",
    title: "Bring us to your church",
    description: "We'd love to spend an evening singing with your congregation. Tell us a little about your gathering and we'll be in touch."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(ScriptureBlock, {
    onDark: true,
    align: "left",
    size: "sm",
    verse: "How good and pleasant it is when God's people dwell together.",
    reference: "Psalm 133:1"
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    padding: "var(--space-6)"
  }, booked ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '30px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tbb-script",
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 40,
      color: 'var(--primary)',
      lineHeight: 1
    }
  }, "Thank you!"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      color: 'var(--text-muted)'
    }
  }, "We've got your request and will reach out soon.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setBooked(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "First & last"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Church / venue",
    placeholder: "Where will we be singing?",
    hint: "Church, revival, or festival \u2014 we'd be honored."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Ideal date",
    placeholder: "Month or season is fine",
    hint: "Or call us directly at 479-200-3599."
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true
  }, "Send invitation")))))));
}
window.TourScreen = TourScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TourScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/bits.jsx
try { (() => {
// Shared visual bits for the website kit
// AlbumCover: styled placeholder cover (real cover art to be supplied).
function AlbumCover({
  title = 'Full Circle',
  subtitle = 'The Bilderbacks',
  size = '100%',
  radius = 'var(--radius-lg)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      aspectRatio: '1 / 1',
      borderRadius: radius,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: 'var(--shadow-lg)',
      background: 'linear-gradient(150deg, var(--walnut-700), var(--walnut-900) 60%, var(--rust-700))',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '8%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 80% at 70% 10%, rgba(206,117,81,0.35), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 8
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(22px, 4vw, 40px)',
      lineHeight: 1.05,
      color: 'var(--cream-50)'
    }
  }, title)));
}
window.AlbumCover = AlbumCover;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/bits.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ScriptureBlock = __ds_scope.ScriptureBlock;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
