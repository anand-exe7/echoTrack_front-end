export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.left}>
          <span style={styles.brand}>EchoTrack</span>
          <p style={styles.tagline}>
            Built for growth — not noise.
          </p>
        </div>

        <div style={styles.right}>
          <span>© 2026 EchoTrack</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "3.5rem 8% 3rem",
    background:
      "linear-gradient(180deg, #F6F7FF 0%, #EEF0FF 100%)",
    borderTop: "1px solid rgba(99,102,241,0.15)",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    gap: "2rem",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  brand: {
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#4f46e5",
    letterSpacing: "0.02em",
  },
  tagline: {
    fontSize: "0.9rem",
    color: "#64748b",
  },
  right: {
    display: "flex",
    gap: "1.6rem",
    fontSize: "0.85rem",
    color: "#64748b",
  },
};
