import { useState } from 'react';

// ─── Curriculum placeholder (empty — content added later) ─────────────────────
const curriculum = [];

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const Icons = {
  logo: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="6" stroke="#c8a96e" strokeWidth="2" />
      <path d="M9 22V10h4.5c2.5 0 4 1.2 4 3.2 0 1.5-1 2.6-2.5 3L18 22h-3l-2.5-5H12v5H9z" fill="#c8a96e" />
      <circle cx="22" cy="12" r="3" fill="#5aacda" opacity="0.6" />
      <rect x="19" y="18" width="6" height="2" rx="1" fill="#c8a96e" opacity="0.4" />
    </svg>
  ),
  back: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  check: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" stroke="#4aaa7a" strokeWidth="1.5" />
      <path d="M5.5 9l2.5 2.5L12.5 7" stroke="#4aaa7a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  copy: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 11V3.5A.5.5 0 013.5 3H11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  search: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7.5" cy="7.5" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11.5 11.5L15.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  clock: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 4v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  book: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 19.5V4.5A2 2 0 016 2.5h14v17H6a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 19.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 7h8M8 11h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  chart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="12" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="6" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17" y="9" width="4" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  settings: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M15.66 15.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M15.66 8.34l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  layers: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l10 6-10 6L2 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 12l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 16l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  database: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l7 4v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V7l7-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const moduleIcons = [Icons.book, Icons.chart, Icons.settings, Icons.layers, Icons.database, Icons.shield];

// ─── Style Constants ──────────────────────────────────────────────────────────
const C = {
  bgPrimary: '#0a0e1a',
  bgSecondary: '#111827',
  bgCard: '#151f30',
  accent: '#c8a96e',
  accentLight: '#e8d5a3',
  textPrimary: '#e8d5a3',
  textSecondary: '#8a9bb0',
  textMuted: '#4a5a6a',
  success: '#4aaa7a',
  tcode: '#5aacda',
  tcodeBg: '#0f2030',
  border: '#1e2a3a',
  warning: '#d4a44a',
  heading: "'Playfair Display', Georgia, serif",
  body: "'IBM Plex Sans', -apple-system, sans-serif",
  mono: "'IBM Plex Mono', 'Courier New', monospace",
};

// ─── Shared Styles ────────────────────────────────────────────────────────────
const s = {
  card: {
    background: C.bgCard,
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
  },
  cardHover: {
    borderColor: C.accent,
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 32px rgba(200,169,110,0.08)`,
  },
  btnPrimary: {
    background: `linear-gradient(135deg, ${C.accent} 0%, #b8954e 100%)`,
    color: '#0a0e1a',
    border: 'none',
    borderRadius: 8,
    padding: '12px 28px',
    fontSize: 14,
    fontWeight: 600,
    fontFamily: C.body,
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 4px 16px rgba(200,169,110,0.2)',
    letterSpacing: '0.3px',
  },
  btnPrimaryHover: {
    transform: 'scale(1.04)',
    boxShadow: '0 6px 24px rgba(200,169,110,0.35)',
  },
  tcodeChip: {
    display: 'inline-block',
    fontFamily: C.mono,
    color: C.tcode,
    background: C.tcodeBg,
    padding: '3px 10px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.5px',
    marginRight: 6,
    marginBottom: 4,
  },
  backBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    color: C.textSecondary,
    background: 'none',
    border: 'none',
    fontFamily: C.body,
    fontSize: 14,
    cursor: 'pointer',
    padding: '6px 0',
    transition: 'color 0.2s',
    marginBottom: 24,
  },
  progressBar: (pct, color = C.accent) => ({
    width: '100%',
    height: 6,
    background: 'rgba(255,255,255,0.06)',
    borderRadius: 3,
    overflow: 'hidden',
    position: 'relative',
  }),
  progressFill: (pct, color = C.accent) => ({
    width: `${pct}%`,
    height: '100%',
    background: `linear-gradient(90deg, ${color}, ${C.accentLight})`,
    borderRadius: 3,
    transition: 'width 0.4s ease',
  }),
};

// ─── Hover helper ─────────────────────────────────────────────────────────────
function useHover() {
  const [hovered, setHovered] = useState(null);
  return {
    hovered,
    bind: (id) => ({
      onMouseEnter: () => setHovered(id),
      onMouseLeave: () => setHovered(null),
    }),
    is: (id) => hovered === id,
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE 1: HOME
// ═══════════════════════════════════════════════════════════════════════════════
function HomePage({ navigate }) {
  const h = useHover();

  const placeholderModules = [
    { title: 'General Ledger', duration: '4h 30m', lessons: 12, complete: 0 },
    { title: 'Accounts Payable', duration: '3h 45m', lessons: 10, complete: 0 },
    { title: 'Accounts Receivable', duration: '3h 15m', lessons: 9, complete: 0 },
    { title: 'Asset Accounting', duration: '2h 50m', lessons: 8, complete: 0 },
    { title: 'Cost Center Accounting', duration: '4h 10m', lessons: 11, complete: 0 },
    { title: 'Profit Center Accounting', duration: '3h 30m', lessons: 10, complete: 0 },
  ];

  return (
    <div style={{ minHeight: '100vh', fontFamily: C.body }}>
      {/* ── Header ─────────────────────────────────────────── */}
      <header style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 32px',
        borderBottom: `1px solid ${C.border}`,
        background: 'rgba(10,14,26,0.8)',
        backdropFilter: 'blur(12px)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {Icons.logo}
          <span style={{
            fontFamily: C.heading, fontSize: 18, fontWeight: 700,
            color: C.accentLight, letterSpacing: '0.5px',
          }}>
            SAP FICO
          </span>
          <span style={{ color: C.textMuted, fontSize: 12, fontWeight: 400, marginLeft: 4 }}>
            Learning Platform
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 160 }}>
            <div style={{ fontSize: 10, color: C.textMuted, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Overall Progress
            </div>
            <div style={s.progressBar(0)}>
              <div style={s.progressFill(0)} />
            </div>
          </div>
          <button
            style={{
              ...s.card,
              padding: '8px 16px',
              fontSize: 12,
              color: C.tcode,
              fontFamily: C.mono,
              fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 6,
              background: C.tcodeBg,
              border: `1px solid ${C.border}`,
              ...(h.is('tcode-btn') ? { borderColor: C.tcode, color: '#7cc4ea' } : {}),
            }}
            {...h.bind('tcode-btn')}
            onClick={() => navigate('tcode')}
          >
            T-Code Reference
          </button>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section style={{ padding: '60px 32px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{
          fontFamily: C.heading, fontSize: 42, fontWeight: 700,
          color: C.accentLight, marginBottom: 8, lineHeight: 1.2,
        }}>
          Master SAP FICO
        </h1>
        <p style={{ fontSize: 16, color: C.textSecondary, marginBottom: 40, maxWidth: 560, lineHeight: 1.6 }}>
          Financial Accounting & Controlling — structured learning with real-world
          transaction codes, CA insights, and assessment-driven mastery.
        </p>

        {/* Stat boxes */}
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 48 }}>
          {[
            { label: 'Lessons Completed', value: '0', sub: 'of 60' },
            { label: 'Quizzes Passed', value: '0', sub: 'of 30' },
            { label: 'Days Remaining', value: '90', sub: 'subscription' },
          ].map((st, i) => (
            <div key={i} style={{
              ...s.card,
              padding: '20px 28px',
              minWidth: 180,
              flex: '1 1 180px',
              ...(h.is(`stat-${i}`) ? s.cardHover : {}),
            }} {...h.bind(`stat-${i}`)}>
              <div style={{ fontSize: 11, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: 8 }}>
                {st.label}
              </div>
              <div style={{ fontFamily: C.heading, fontSize: 32, fontWeight: 700, color: C.accentLight }}>
                {st.value}
              </div>
              <div style={{ fontSize: 12, color: C.textMuted, marginTop: 4 }}>{st.sub}</div>
            </div>
          ))}
        </div>

        {/* ── Module Grid ──────────────────────────────────── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h2 style={{ fontFamily: C.heading, fontSize: 22, color: C.accentLight, fontWeight: 600 }}>
            Learning Modules
          </h2>
          <button
            style={{
              ...s.btnPrimary,
              ...(h.is('continue') ? s.btnPrimaryHover : {}),
            }}
            {...h.bind('continue')}
          >
            Continue Learning →
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {placeholderModules.map((mod, i) => (
            <div
              key={i}
              style={{
                ...s.card,
                padding: '24px',
                display: 'flex', flexDirection: 'column', gap: 16,
                ...(h.is(`mod-${i}`) ? s.cardHover : {}),
              }}
              {...h.bind(`mod-${i}`)}
              onClick={() => navigate('module', i)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ color: C.accent, opacity: 0.8 }}>
                  {moduleIcons[i]}
                </div>
                <span style={{
                  fontSize: 10, fontWeight: 600, textTransform: 'uppercase',
                  letterSpacing: '1px', color: C.textMuted,
                  background: 'rgba(255,255,255,0.04)',
                  padding: '3px 10px', borderRadius: 20,
                }}>
                  {mod.complete === mod.lessons ? '✓ Complete' : `${mod.complete}/${mod.lessons}`}
                </span>
              </div>
              <div>
                <h3 style={{ fontFamily: C.heading, fontSize: 18, color: C.accentLight, fontWeight: 600, marginBottom: 6 }}>
                  {mod.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: C.textMuted }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    {Icons.clock} {mod.duration}
                  </span>
                  <span>{mod.lessons} lessons</span>
                </div>
              </div>
              <div style={s.progressBar(0)}>
                <div style={s.progressFill((mod.complete / mod.lessons) * 100)} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE 2: MODULE
// ═══════════════════════════════════════════════════════════════════════════════
function ModulePage({ navigate, moduleIndex }) {
  const h = useHover();

  const moduleNames = [
    'General Ledger', 'Accounts Payable', 'Accounts Receivable',
    'Asset Accounting', 'Cost Center Accounting', 'Profit Center Accounting',
  ];
  const moduleDurations = ['4h 30m', '3h 45m', '3h 15m', '2h 50m', '4h 10m', '3h 30m'];

  const placeholderLessons = [
    { title: 'Introduction & Overview', tcodes: ['SPRO', 'SM30'], done: false },
    { title: 'Master Data Configuration', tcodes: ['FS00', 'FSP0', 'FSS0'], done: false },
    { title: 'Document Posting', tcodes: ['FB50', 'FB01', 'F-02'], done: false },
    { title: 'Periodic Processing', tcodes: ['F.01', 'FAGL3KE'], done: false },
    { title: 'Reporting & Analysis', tcodes: ['S_ALR_87012284'], done: false },
  ];

  const idx = moduleIndex ?? 0;

  return (
    <div style={{ minHeight: '100vh', fontFamily: C.body, padding: '32px', maxWidth: 900, margin: '0 auto' }}>
      <button
        style={{ ...s.backBtn, ...(h.is('back') ? { color: C.accentLight } : {}) }}
        {...h.bind('back')}
        onClick={() => navigate('home')}
      >
        {Icons.back} Back to Modules
      </button>

      {/* Module header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: `linear-gradient(135deg, ${C.bgCard}, ${C.bgSecondary})`,
          border: `1px solid ${C.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: C.accent,
        }}>
          {moduleIcons[idx]}
        </div>
        <div>
          <h1 style={{ fontFamily: C.heading, fontSize: 28, color: C.accentLight, fontWeight: 700, marginBottom: 4 }}>
            {moduleNames[idx]}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: C.textMuted }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>{Icons.clock} {moduleDurations[idx]}</span>
            <span>•</span>
            <span>{placeholderLessons.length} lessons</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 11, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '1px' }}>Module Progress</span>
          <span style={{ fontSize: 12, color: C.textMuted }}>0%</span>
        </div>
        <div style={s.progressBar(0)}>
          <div style={s.progressFill(0)} />
        </div>
      </div>

      {/* Lesson list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {placeholderLessons.map((lesson, i) => (
          <div
            key={i}
            style={{
              ...s.card,
              padding: '18px 24px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              ...(h.is(`lesson-${i}`) ? s.cardHover : {}),
            }}
            {...h.bind(`lesson-${i}`)}
            onClick={() => navigate('lesson', moduleIndex, i)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'rgba(255,255,255,0.03)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 600, color: C.textMuted,
                fontFamily: C.mono,
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div style={{ fontSize: 15, color: C.accentLight, fontWeight: 500, marginBottom: 6 }}>
                  {lesson.title}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {lesson.tcodes.map((tc, j) => (
                    <span key={j} style={s.tcodeChip}>{tc}</span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              {lesson.done && Icons.check}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE 3: LESSON
// ═══════════════════════════════════════════════════════════════════════════════
function LessonPage({ navigate, moduleIndex, lessonIndex }) {
  const h = useHover();
  const [selectedOption, setSelectedOption] = useState(null);

  const placeholderTcodes = ['FB50', 'FB01', 'F-02'];
  const quizOptions = ['Option A', 'Option B', 'Option C', 'Option D'];

  return (
    <div style={{ minHeight: '100vh', fontFamily: C.body, padding: '32px', maxWidth: 860, margin: '0 auto' }}>
      <button
        style={{ ...s.backBtn, ...(h.is('back') ? { color: C.accentLight } : {}) }}
        {...h.bind('back')}
        onClick={() => navigate('module', moduleIndex)}
      >
        {Icons.back} Back to Module
      </button>

      {/* Lesson header */}
      <div style={{ marginBottom: 36 }}>
        <h1 style={{ fontFamily: C.heading, fontSize: 28, color: C.accentLight, fontWeight: 700, marginBottom: 12 }}>
          Document Posting
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {placeholderTcodes.map((tc, i) => (
            <span key={i} style={{ ...s.tcodeChip, fontSize: 13, padding: '5px 14px' }}>{tc}</span>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div style={{
        ...s.card,
        padding: '40px 32px',
        marginBottom: 24,
        minHeight: 200,
        borderColor: 'transparent',
      }}>
        <div style={{
          fontSize: 14, color: C.textMuted, textAlign: 'center',
          fontStyle: 'italic', lineHeight: 1.8,
        }}>
          Lesson content will be displayed here.
        </div>
      </div>

      {/* CA Insight box */}
      <div style={{
        background: 'rgba(74,170,122,0.06)',
        border: `1px solid rgba(74,170,122,0.2)`,
        borderRadius: 12,
        padding: '20px 24px',
        marginBottom: 16,
      }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: C.success,
          textTransform: 'uppercase', letterSpacing: '1.5px',
          marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.success, display: 'inline-block' }} />
          CA Insight
        </div>
        <div style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.7 }}>
          Chartered Accountant perspective and practical insights will appear here.
        </div>
      </div>

      {/* Common Mistakes box */}
      <div style={{
        background: 'rgba(212,164,74,0.06)',
        border: `1px solid rgba(212,164,74,0.2)`,
        borderRadius: 12,
        padding: '20px 24px',
        marginBottom: 40,
      }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: C.warning,
          textTransform: 'uppercase', letterSpacing: '1.5px',
          marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.warning, display: 'inline-block' }} />
          Common Mistakes
        </div>
        <div style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.7 }}>
          Frequently encountered errors and how to avoid them will appear here.
        </div>
      </div>

      {/* Quiz section */}
      <div style={{
        borderTop: `1px solid ${C.border}`,
        paddingTop: 36,
        marginBottom: 40,
      }}>
        <h2 style={{
          fontFamily: C.heading, fontSize: 20, color: C.accentLight,
          fontWeight: 600, marginBottom: 8,
        }}>
          Knowledge Check
        </h2>
        <p style={{ fontSize: 14, color: C.textSecondary, marginBottom: 24, lineHeight: 1.6 }}>
          Quiz question will be displayed here.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {quizOptions.map((opt, i) => (
            <button
              key={i}
              style={{
                ...s.card,
                padding: '14px 20px',
                fontSize: 14,
                color: selectedOption === i ? C.accentLight : C.textSecondary,
                fontFamily: C.body,
                textAlign: 'left',
                display: 'flex', alignItems: 'center', gap: 12,
                borderColor: selectedOption === i ? C.accent : C.border,
                background: selectedOption === i ? 'rgba(200,169,110,0.06)' : C.bgCard,
                ...(h.is(`opt-${i}`) && selectedOption !== i ? { borderColor: 'rgba(200,169,110,0.3)' } : {}),
              }}
              {...h.bind(`opt-${i}`)}
              onClick={() => setSelectedOption(i)}
            >
              <span style={{
                width: 28, height: 28, borderRadius: '50%',
                border: `1.5px solid ${selectedOption === i ? C.accent : C.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 600, fontFamily: C.mono,
                color: selectedOption === i ? C.accent : C.textMuted,
                flexShrink: 0,
              }}>
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Mark Complete */}
      <div style={{ textAlign: 'center', paddingBottom: 40 }}>
        <button
          style={{
            ...s.btnPrimary,
            padding: '14px 48px',
            fontSize: 15,
            ...(h.is('complete') ? s.btnPrimaryHover : {}),
          }}
          {...h.bind('complete')}
        >
          Mark Complete ✓
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE 4: T-CODE REFERENCE
// ═══════════════════════════════════════════════════════════════════════════════
function TCodePage({ navigate }) {
  const h = useHover();
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(null);

  const placeholderTcodes = [
    { code: 'FB50', desc: 'Enter G/L Account Document', module: 'General Ledger' },
    { code: 'FB01', desc: 'Post Document', module: 'General Ledger' },
    { code: 'F-02', desc: 'Enter G/L Account Posting', module: 'General Ledger' },
    { code: 'FK01', desc: 'Create Vendor Master', module: 'Accounts Payable' },
    { code: 'F-43', desc: 'Enter Vendor Invoice', module: 'Accounts Payable' },
    { code: 'F-53', desc: 'Post Vendor Payment', module: 'Accounts Payable' },
    { code: 'FD01', desc: 'Create Customer Master', module: 'Accounts Receivable' },
    { code: 'F-22', desc: 'Enter Customer Invoice', module: 'Accounts Receivable' },
    { code: 'AS01', desc: 'Create Asset Master', module: 'Asset Accounting' },
    { code: 'ABZON', desc: 'Asset Acquisition (Auto)', module: 'Asset Accounting' },
    { code: 'KS01', desc: 'Create Cost Center', module: 'Cost Center Accounting' },
    { code: 'KE51', desc: 'Create Profit Center', module: 'Profit Center Accounting' },
  ];

  const filtered = placeholderTcodes.filter(
    (t) =>
      t.code.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase()) ||
      t.module.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: C.body, padding: '32px', maxWidth: 1100, margin: '0 auto' }}>
      <button
        style={{ ...s.backBtn, ...(h.is('back') ? { color: C.accentLight } : {}) }}
        {...h.bind('back')}
        onClick={() => navigate('home')}
      >
        {Icons.back} Back to Home
      </button>

      <h1 style={{
        fontFamily: C.heading, fontSize: 28, color: C.accentLight,
        fontWeight: 700, marginBottom: 28,
      }}>
        T-Code Reference
      </h1>

      {/* Search bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: '12px 20px',
        marginBottom: 32,
        transition: 'border-color 0.2s',
        ...(h.is('search') ? { borderColor: C.accent } : {}),
      }} {...h.bind('search')}>
        <span style={{ color: C.textMuted }}>{Icons.search}</span>
        <input
          type="text"
          placeholder="Search by T-code, description, or module..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            color: C.accentLight,
            fontSize: 14,
            fontFamily: C.body,
            width: '100%',
            caretColor: C.accent,
          }}
        />
        {search && (
          <span style={{ fontSize: 12, color: C.textMuted, whiteSpace: 'nowrap' }}>
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* T-Code grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 16,
      }}>
        {filtered.map((t, i) => (
          <div
            key={i}
            style={{
              ...s.card,
              padding: '20px',
              display: 'flex', flexDirection: 'column', gap: 10,
              ...(h.is(`tc-${i}`) ? s.cardHover : {}),
            }}
            {...h.bind(`tc-${i}`)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                fontFamily: C.mono,
                fontSize: 16, fontWeight: 600,
                color: C.tcode,
                letterSpacing: '0.5px',
              }}>
                {t.code}
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); handleCopy(t.code); }}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: copied === t.code ? C.success : C.textMuted,
                  transition: 'color 0.2s', padding: 4,
                  display: 'flex', alignItems: 'center',
                }}
                title="Copy to clipboard"
              >
                {copied === t.code ? Icons.check : Icons.copy}
              </button>
            </div>
            <div style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.5 }}>
              {t.desc}
            </div>
            <div style={{
              fontSize: 10, fontWeight: 600, color: C.textMuted,
              textTransform: 'uppercase', letterSpacing: '1px',
              background: 'rgba(255,255,255,0.03)',
              padding: '3px 10px', borderRadius: 20,
              alignSelf: 'flex-start',
            }}>
              {t.module}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{
          textAlign: 'center', padding: '60px 20px',
          color: C.textMuted, fontSize: 14,
        }}>
          No T-codes match your search.
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// APP SHELL — Navigation Router
// ═══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState('home');
  const [moduleIndex, setModuleIndex] = useState(0);
  const [lessonIndex, setLessonIndex] = useState(0);

  const navigate = (target, modIdx, lesIdx) => {
    setPage(target);
    if (modIdx !== undefined) setModuleIndex(modIdx);
    if (lesIdx !== undefined) setLessonIndex(lesIdx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  switch (page) {
    case 'module':
      return <ModulePage navigate={navigate} moduleIndex={moduleIndex} />;
    case 'lesson':
      return <LessonPage navigate={navigate} moduleIndex={moduleIndex} lessonIndex={lessonIndex} />;
    case 'tcode':
      return <TCodePage navigate={navigate} />;
    default:
      return <HomePage navigate={navigate} />;
  }
}
