export default function FinalCTA() {
  return (
    <section id="cta" style={styles.section}>
      <div style={styles.content}>
        <h2 style={styles.heading}>
          Growth deserves reflection,
          <br />
          not pressure.
        </h2>

        <p style={styles.text}>
          EchoTrack helps you notice effort, patterns, and progress —
          without streaks, comparison, or noise.
        </p>

        <button style={styles.button}>
          Start your EchoTrack journey
        </button>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "10rem 8%",
    background:
      "linear-gradient(180deg, #F8F9FF 0%, #EEF0FF 60%, #F8F9FF 100%)",
    textAlign: "center",
  },
  content: {
    maxWidth: "720px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2.6rem",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "1.6rem",
    lineHeight: 1.25,
  },
  text: {
    fontSize: "1.05rem",
    color: "#64748b",
    lineHeight: 1.7,
    marginBottom: "3.2rem",
  },
  button: {
    background: "linear-gradient(135deg, #6366f1, #818cf8)",
    color: "#fff",
    border: "none",
    padding: "14px 34px",
    borderRadius: "999px",
    fontSize: "0.95rem",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 16px 40px rgba(99,102,241,0.35)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};
