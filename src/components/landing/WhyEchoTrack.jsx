import { motion } from "framer-motion";

export default function WhyEchoTrack() {
  const reasons = [
    {
      tag: "NO NOISE",
      title: "Not social media",
      desc: "There are no likes, followers, or feeds here. EchoTrack exists only for you — not an audience.",
    },
    {
      tag: "NO PRESSURE",
      title: "Consistency without streaks",
      desc: "Missed days don’t erase progress. Growth isn’t fragile, and it doesn’t reset.",
    },
    {
      tag: "NO COMPARISON",
      title: "Your pace is valid",
      desc: "You’re not behind. You’re just moving differently. EchoTrack reflects effort, not outcomes.",
    },
  ];

  return (
    <section id="why" style={styles.section}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Why EchoTrack exists</h2>
        <div style={styles.titleUnderline} />

        <p style={styles.subtitle}>
          Most tools push you to perform.
          <br />
          EchoTrack is built to help you notice.
        </p>
      </div>

      {/* Cards */}
      <div style={styles.grid}>
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span style={styles.tag}>{item.tag}</span>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardDesc}>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.div
        style={styles.quote}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          “Progress doesn’t need applause.
          <br />
          It needs space.”
        </p>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    padding: "160px 8%",
    background:
      "linear-gradient(180deg, rgba(78,84,200,0.06) 0%, rgba(255,255,255,0) 100%)",
  },

  header: {
    maxWidth: "680px",
    marginBottom: "90px",
  },

  title: {
    fontSize: "clamp(2.3rem, 4vw, 3rem)",
    fontWeight: 700,
    color: "#4E54C8",
    marginBottom: "14px",
  },

  titleUnderline: {
    width: "42px",
    height: "4px",
    background: "#4E54C8",
    borderRadius: "999px",
    marginBottom: "22px",
  },

  subtitle: {
    fontSize: "1.1rem",
    color: "#64748b",
    lineHeight: 1.7,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "36px",
  },

  card: {
    padding: "42px 36px",
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(14px)",
    borderRadius: "22px",
    boxShadow: "0 24px 60px rgba(15,23,42,0.08)",
  },

  tag: {
    display: "inline-block",
    fontSize: "0.7rem",
    letterSpacing: "0.12em",
    fontWeight: 600,
    color: "#4E54C8",
    background: "rgba(78,84,200,0.1)",
    padding: "6px 14px",
    borderRadius: "999px",
    marginBottom: "18px",
  },

  cardTitle: {
    fontSize: "1.35rem",
    fontWeight: 600,
    color: "#020617",
    marginBottom: "14px",
  },

  cardDesc: {
    fontSize: "0.98rem",
    color: "#475569",
    lineHeight: 1.7,
  },

  quote: {
    marginTop: "120px",
    textAlign: "center",
    fontSize: "1.15rem",
    color: "#475569",
    opacity: 0.85,
  },
};
