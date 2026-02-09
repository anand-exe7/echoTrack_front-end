import { motion } from "framer-motion";

export default function ProductPreview() {
  return (
    <section id="preview" style={styles.section}>
      <div style={styles.wrapper}>
        {/* LEFT — Text */}
        <motion.div
          style={styles.textBlock}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 style={styles.title}>See your effort clearly</h2>

          <p style={styles.desc}>
            EchoTrack gives you a quiet, structured view of how effort
            accumulates over time — without dashboards that overwhelm or
            numbers that pressure.
          </p>

          <p style={styles.descMuted}>
            What you see here isn’t performance.
            <br />
            It’s reflection.
          </p>

          <button style={styles.button}>
            Explore the product →
          </button>
        </motion.div>

        {/* RIGHT — Product Visual */}
        <motion.div
          style={styles.visualBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div style={styles.mock}>
            {/* Replace this div later with image / video / iframe */}
            <div style={styles.mockHeader} />
            <div style={styles.mockContent}>
              <div style={styles.line} />
              <div style={styles.lineShort} />
              <div style={styles.graph} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "10rem 8%",
    background:
      "linear-gradient(180deg, #F7F8FF 0%, #FFFFFF 70%)",
  },
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: "6rem",
    alignItems: "center",
  },
  textBlock: {
    maxWidth: "420px",
  },
  title: {
    fontSize: "2.6rem",
    fontWeight: 700,
    color: "#1e293b",
    marginBottom: "1.4rem",
  },
  desc: {
    fontSize: "1.05rem",
    color: "#475569",
    lineHeight: 1.8,
    marginBottom: "1.6rem",
  },
  descMuted: {
    fontSize: "0.95rem",
    color: "#64748b",
    lineHeight: 1.7,
    marginBottom: "2.4rem",
  },
  button: {
    background: "#6366f1",
    color: "#fff",
    border: "none",
    padding: "14px 26px",
    borderRadius: "999px",
    fontSize: "0.95rem",
    fontWeight: 600,
    cursor: "pointer",
  },

  /* Product mock */
  visualBlock: {
    display: "flex",
    justifyContent: "center",
  },
  mock: {
    width: "100%",
    maxWidth: "520px",
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 40px 80px rgba(0,0,0,0.12)",
    overflow: "hidden",
  },
  mockHeader: {
    height: "44px",
    background: "linear-gradient(90deg, #6366f1, #818cf8)",
  },
  mockContent: {
    padding: "28px",
  },
  line: {
    height: "10px",
    background: "#E5E7EB",
    borderRadius: "6px",
    marginBottom: "14px",
  },
  lineShort: {
    height: "10px",
    width: "60%",
    background: "#E5E7EB",
    borderRadius: "6px",
    marginBottom: "26px",
  },
  graph: {
    height: "160px",
    borderRadius: "14px",
    background:
      "linear-gradient(180deg, rgba(99,102,241,0.25), rgba(99,102,241,0.05))",
  },
};
